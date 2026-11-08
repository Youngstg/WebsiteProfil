const fs = require('fs');
const path = require('path');

const en = fs.readFileSync(path.join(__dirname, '../src/data/portfolioData-en.js'), 'utf8');
const id = fs.readFileSync(path.join(__dirname, '../src/data/portfolioData-id.js'), 'utf8');

const regex = /['"](\/(images|notebooks|certificates)[^'"]+)['"]/g;
const foundPaths = new Set();
let match;
while ((match = regex.exec(en)) !== null) foundPaths.add(match[1]);
while ((match = regex.exec(id)) !== null) foundPaths.add(match[1]);

console.log(`Found ${foundPaths.size} local asset references:`);
let missing = 0;
for (const p of Array.from(foundPaths).sort()) {
  const diskPath = path.join(__dirname, '../public', decodeURIComponent(p.replace(/^\//, '')));
  const exists = fs.existsSync(diskPath);
  if (!exists) {
    console.log(`[MISSING] ${p} -> ${diskPath}`);
    missing++;
  } else {
    console.log(`[OK] ${p}`);
  }
}

if (missing > 0) {
  console.error(`Total missing assets: ${missing}`);
  process.exit(1);
} else {
  console.log('All referenced assets exist on disk!');
}
