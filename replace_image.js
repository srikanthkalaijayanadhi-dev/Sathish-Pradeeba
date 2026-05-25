const fs = require('fs');

let html = fs.readFileSync('c:/Users/srika/Downloads/marrainvitationge/index.html', 'utf-8');

// The exact string in index.html is likely this (based on my previous view_file):
// <img src="https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_50_22_AM_yfg2vn.png" alt="South Indian temple gopuram at golden sunrise" width="1920" height="1280" class="w-full h-full object-cover animate-zoom"/>

// I'll use a regex that matches the <img> tag containing the PC image URL, regardless of attributes order.
const imgRegex = /<img[^>]*ChatGPT_Image_May_25_2026_04_50_22_AM_yfg2vn\.png[^>]*>/;

const newPicture = `<picture class="w-full h-full block absolute inset-0">
  <source media="(max-width: 768px)" srcset="https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_57_31_AM_nd8x2u.png">
  <img src="https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_50_22_AM_yfg2vn.png" alt="South Indian temple gopuram at golden sunrise" class="w-full h-full object-cover animate-zoom"/>
</picture>`;

// Wait, the regex will also match the <link rel="preload"> tag in the head if I'm not careful.
// Let's make sure it matches <img ...>
if (imgRegex.test(html)) {
    html = html.replace(imgRegex, newPicture);
    fs.writeFileSync('c:/Users/srika/Downloads/marrainvitationge/index.html', html);
    console.log('Successfully replaced img with picture tag for mobile optimization!');
} else {
    console.log('Could not find the img tag with regex.');
}
