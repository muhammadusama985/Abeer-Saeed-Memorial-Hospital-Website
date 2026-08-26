const fs = require('fs');
const content = fs.readFileSync('src/App.css', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
console.log('First line:', lines[0]);
console.log('Line 100:', lines[99]);
console.log('Line 380:', lines[379]);
console.log('Line 500:', lines[499]);
console.log('Last line:', lines[lines.length-1]);
