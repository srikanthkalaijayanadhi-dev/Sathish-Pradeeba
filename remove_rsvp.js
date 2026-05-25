const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<section id="rsvp" class="relative py-32 px-6 overflow-hidden">.*?<\/section>/s, '');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Removed RSVP section');
