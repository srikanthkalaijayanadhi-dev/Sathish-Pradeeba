const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<div class="relative z-10 h-full flex flex-col[^>]*>[\s\S]*?<\/button>/);
console.log(match ? match[0] : 'not found');
