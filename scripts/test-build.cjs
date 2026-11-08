const fs = require('fs');

const en = fs.readFileSync('dist/index.html', 'utf8');
const id = fs.readFileSync('dist/id/index.html', 'utf8');

console.log('EN lang:', /lang="([^"]+)"/.exec(en)?.[1]);
console.log('ID lang:', /lang="([^"]+)"/.exec(id)?.[1]);
console.log('EN canonical:', /rel="canonical" href="([^"]+)"/.exec(en)?.[1]);
console.log('ID canonical:', /rel="canonical" href="([^"]+)"/.exec(id)?.[1]);
console.log('EN og:locale:', /property="og:locale" content="([^"]+)"/.exec(en)?.[1]);
console.log('ID og:locale:', /property="og:locale" content="([^"]+)"/.exec(id)?.[1]);
console.log('EN og:image:', /property="og:image" content="([^"]+)"/.exec(en)?.[1]);
console.log('ID og:image:', /property="og:image" content="([^"]+)"/.exec(id)?.[1]);

