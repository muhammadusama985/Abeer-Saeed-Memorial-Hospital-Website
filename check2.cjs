const fs = require('fs');
const path = require('path');

const dir = 'e:/ASMH/hospital/src';
const files = ['App.css', 'index.css'];
files.forEach(f => {
  const full = path.join(dir, f);
  const content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');
  const sizeKB = (fs.statSync(full).size / 1024).toFixed(1);
  console.log(`${f}: ${lines.length} lines, ${sizeKB} KB`);
});

// Search for specific classes
const appcss = fs.readFileSync('e:/ASMH/hospital/src/App.css', 'utf8');
const idxcss = fs.readFileSync('e:/ASMH/hospital/src/index.css', 'utf8');
['page-hero', 'video-player', 'about-section', 'about-extra', 'brand-logo'].forEach(cls => {
  console.log(`"${cls}" in App.css:`, appcss.includes(cls), '| in index.css:', idxcss.includes(cls));
});
