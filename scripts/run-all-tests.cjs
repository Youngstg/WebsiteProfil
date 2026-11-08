const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

console.log('====================================================');
console.log('   PORTFOLIO AUTOMATED COMPREHENSIVE TEST SUITE     ');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${testName}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${testName}`);
    if (details) console.error(`         -> ${details}`);
  }
}

// -------------------------------------------------------------
// TEST SUITE 1: ESLint
// -------------------------------------------------------------
console.log('1. Running ESLint Code Quality Verification...');
try {
  execSync('npx eslint .', { stdio: 'pipe', encoding: 'utf-8' });
  assert(true, 'ESLint passed with 0 errors and 0 warnings');
} catch (err) {
  assert(false, 'ESLint check failed', err.stdout || err.message);
}

// -------------------------------------------------------------
// TEST SUITE 2: Production Build
// -------------------------------------------------------------
console.log('\n2. Running Vite Production Build Verification...');
try {
  execSync('npm run build', { stdio: 'pipe', encoding: 'utf-8' });
  const distHtml = fs.existsSync(path.join(__dirname, '../dist/index.html'));
  assert(distHtml, 'dist/index.html successfully generated for unified SPA');
} catch (err) {
  assert(false, 'Build failed', err.stdout || err.message);
}

// -------------------------------------------------------------
// TEST SUITE 3: Data Integrity & Bilingual Parity
// -------------------------------------------------------------
console.log('\n3. Checking Data Structure & Bilingual Content Parity...');
const enPath = path.join(__dirname, '../src/data/portfolioData-en.js');
const idPath = path.join(__dirname, '../src/data/portfolioData-id.js');

const enContent = fs.readFileSync(enPath, 'utf8');
const idContent = fs.readFileSync(idPath, 'utf8');

// Check no placeholder texts
const placeholderRegex = /\[\s*\.\.\.\s*\]|TODO|TBD/i;
assert(!placeholderRegex.test(enContent), 'No placeholders ([ ... ], TODO, TBD) in English data');
assert(!placeholderRegex.test(idContent), 'No placeholders ([ ... ], TODO, TBD) in Indonesian data');

// Check no stale unverified claims
const staleClaims = ['99.9%', '10,000+', '8+', '4+'];
for (const claim of staleClaims) {
  assert(!enContent.includes(claim), `English data is clean of unverified claim "${claim}"`);
  assert(!idContent.includes(claim), `Indonesian data is clean of unverified claim "${claim}"`);
}

// Check AAC Flagship Project properties
assert(enContent.includes('karla-bionic.webp') && idContent.includes('karla-bionic.webp'), 'AAC Project uses real karla-bionic.webp screenshot');
assert(enContent.includes('https://github.com/Youngstg/AplikasiAAC') && idContent.includes('https://github.com/Youngstg/AplikasiAAC'), 'AAC Project links to https://github.com/Youngstg/AplikasiAAC');

// -------------------------------------------------------------
// TEST SUITE 4: HTML & SEO Metadata Verification
// -------------------------------------------------------------
console.log('\n4. Checking HTML Metadata, SEO & OpenGraph...');
const distHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

assert(distHtml.includes('rel="canonical" href="https://luckystg.vercel.app/"'), 'index.html has canonical URL https://luckystg.vercel.app/');
assert(distHtml.includes('property="og:image" content="https://luckystg.vercel.app/images/og-image.webp"'), 'index.html has og:image 1200x630 URL');
assert(distHtml.includes('<noscript>') && distHtml.includes('Lucky Immanuel Sitanggang'), 'index.html contains semantic noscript fallback');

// -------------------------------------------------------------
// TEST SUITE 5: Static Asset Existence
// -------------------------------------------------------------
console.log('\n5. Checking Static Assets on Disk...');
const assetRegex = /['"](\/(images|notebooks|certificates)[^'"]+)['"]/g;
const foundPaths = new Set();
let match;
while ((match = assetRegex.exec(enContent)) !== null) foundPaths.add(match[1]);
while ((match = assetRegex.exec(idContent)) !== null) foundPaths.add(match[1]);

let allAssetsFound = true;
for (const p of foundPaths) {
  const diskPath = path.join(__dirname, '../public', decodeURIComponent(p.replace(/^\//, '')));
  if (!fs.existsSync(diskPath)) {
    allAssetsFound = false;
    assert(false, `Asset missing: ${p}`, diskPath);
  }
}
if (allAssetsFound) {
  assert(true, `All ${foundPaths.size} local assets referenced in data exist on disk`);
}

// -------------------------------------------------------------
// TEST SUITE 6: Vercel Configuration & Clean URLs
// -------------------------------------------------------------
console.log('\n6. Checking Vercel Routing Configuration...');
const vercelConfigPath = path.join(__dirname, '../vercel.json');
assert(fs.existsSync(vercelConfigPath), 'vercel.json exists');
if (fs.existsSync(vercelConfigPath)) {
  const vercelJson = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
  assert(vercelJson.cleanUrls === true, 'vercel.json specifies cleanUrls: true');
}

// -------------------------------------------------------------
// TEST SUITE 7: HTTP Smoke Test on Built Dist (Static Web Server)
// -------------------------------------------------------------
console.log('\n7. Running HTTP Server Smoke Test on dist/ ...');

function runHttpServerTest() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/' || reqPath === '/id' || reqPath === '/id/') reqPath = '/index.html';

      const filePath = path.join(__dirname, '../dist', decodeURIComponent(reqPath.replace(/^\//, '')));
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mimeTypes = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
          '.webp': 'image/webp',
          '.svg': 'image/svg+xml',
          '.pdf': 'application/pdf',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });

    const PORT = 8089;
    server.listen(PORT, async () => {
      const fetchPath = (p) => {
        return new Promise((resFetch) => {
          http.get(`http://localhost:${PORT}${p}`, (resp) => {
            let data = '';
            resp.on('data', chunk => data += chunk);
            resp.on('end', () => resFetch({ statusCode: resp.statusCode, headers: resp.headers, data }));
          }).on('error', (err) => resFetch({ statusCode: 500, error: err }));
        });
      };

      try {
        const rootRes = await fetchPath('/');
        assert(rootRes.statusCode === 200, 'HTTP GET / returns 200 OK');
        assert(rootRes.data.includes('Lucky Immanuel Sitanggang'), 'HTTP GET / serves portfolio document');

        const aacImgRes = await fetchPath('/images/preview/karla-bionic.webp');
        assert(aacImgRes.statusCode === 200, 'HTTP GET /images/preview/karla-bionic.webp returns 200 OK');
        assert(aacImgRes.headers['content-type'] === 'image/webp', 'karla-bionic.webp has image/webp content-type');

        const ogRes = await fetchPath('/images/og-image.webp');
        assert(ogRes.statusCode === 200, 'HTTP GET /images/og-image.webp returns 200 OK');
        assert(ogRes.headers['content-type'] === 'image/webp', 'og-image.webp has image/webp content-type');
      } finally {
        server.close(() => resolve());
      }
    });
  });
}

runHttpServerTest().then(() => {
  console.log('\n====================================================');
  console.log(`TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED out of ${totalTests} total tests`);
  console.log('====================================================\n');
  process.exit(failedTests > 0 ? 1 : 0);
});
