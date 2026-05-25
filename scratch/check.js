const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<button id="open-invitation-btn"[^>]*>[\s\S]*?<\/button>/);
console.log('Button HTML:');
console.log(match ? match[0] : 'not found');
