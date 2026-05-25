const fs = require('fs');

let html = fs.readFileSync('scraped.html', 'utf-8');

// Replace Names and Dates
html = html.replace(/Vishu/g, 'Sathish');
html = html.replace(/Kavya/g, 'Pradeeba');
html = html.replace(/12 March 2026/g, '4 June 2026');
html = html.replace(/12 · March · 2026/g, '04 · June · 2026');
html = html.replace(/12 · 03 · 26/g, '04 · 06 · 26');
html = html.replace(/12 · 03 · 2026/g, '04 · 06 · 2026');

// Update CSS
html = html.replace(/<link rel="stylesheet" href="\/assets\/styles-[^"]+\.css"[^>]*>/g, '<link rel="stylesheet" href="./style.css">');

// Remove React module preloads and scripts
html = html.replace(/<link rel="modulepreload"[^>]*>/g, '');
html = html.replace(/<script defer src="\/~flock\.js"[^>]*><\/script>/g, '');

// Add our script.js and custom.css
if (!html.includes('script.js')) {
    html = html.replace('</head>', '<script defer src="./script.js"></script><link rel="stylesheet" href="./custom.css"></head>');
}

// Map Lovable's Hero and Gallery images to our local generated assets
const imageMap = {
    '/assets/hero-temple-D64e0gq3.jpg': 'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_50_22_AM_yfg2vn.png', // User's PC Hero
    '/assets/gallery-corridor-BmGIFhXw.jpg': './assets/temple_corridor_1779665329174.png',
    '/assets/gallery-mandapam-B4hFPMp2.jpg': './assets/mandapam_altar_1779665379569.png',
    '/assets/gallery-gopuram-PnXZ0ZJe.jpg': './assets/temple_exterior_1779665346453.png',
    '/assets/gallery-bells-CAGslEnR.jpg': './assets/temple_interior_1779665365278.png'
};

for (const [lovableAsset, localAsset] of Object.entries(imageMap)) {
    html = html.split(lovableAsset).join(localAsset);
}

// Any remaining '/assets/' should just point to the live lovable app so they don't break (like petals, diyas)
html = html.replace(/(src|href)="\/assets\//g, '$1="https://invite-charm-58.lovable.app/assets/');

fs.writeFileSync('index.html', html);
console.log('Sanitized index.html created');
