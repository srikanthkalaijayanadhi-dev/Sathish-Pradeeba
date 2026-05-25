const fs = require('fs');

// 1. Update index.html to use <picture> tag for responsive hero image
let html = fs.readFileSync('c:/Users/srika/Downloads/marrainvitationge/index.html', 'utf-8');

const oldImg = '<img src="https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_50_22_AM_yfg2vn.png" alt="South Indian temple gopuram at golden sunrise" width="1920" height="1280" class="w-full h-full object-cover animate-zoom"/>';

const newPicture = `<picture class="w-full h-full block">
  <source media="(max-width: 768px)" srcset="https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_57_31_AM_nd8x2u.png">
  <img src="https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779665348/ChatGPT_Image_May_25_2026_04_50_22_AM_yfg2vn.png" alt="South Indian temple gopuram at golden sunrise" width="1920" height="1280" class="w-full h-full object-cover animate-zoom"/>
</picture>`;

if (html.includes(oldImg)) {
    html = html.replace(oldImg, newPicture);
    fs.writeFileSync('c:/Users/srika/Downloads/marrainvitationge/index.html', html);
    console.log('Updated index.html with responsive hero image');
} else {
    console.log('Old image tag not found in index.html - maybe already updated?');
}

// 2. Append mobile optimizations to custom.css
let css = fs.readFileSync('c:/Users/srika/Downloads/marrainvitationge/custom.css', 'utf-8');

if (!css.includes('Mobile Optimizations')) {
    css += `

/* Mobile Optimizations */
@media (max-width: 768px) {
    /* Scale down hero text slightly to prevent overflow on very small devices */
    h1.text-6xl {
        font-size: clamp(3rem, 15vw, 3.75rem) !important;
    }
    
    /* Make countdown fit nicely on small screens */
    .grid-cols-2 > .glass-temple {
        padding: 1rem 0.5rem;
    }
    .grid-cols-2 .text-5xl {
        font-size: 2.5rem !important;
    }
    
    /* Adjust spacing for timeline */
    .pl-12 {
        padding-left: 2rem !important;
    }
    
    /* Ensure gallery images maintain aspect ratio without stretching */
    .auto-rows-\\[280px\\] {
        grid-auto-rows: 200px !important;
    }
    
    /* Adjust preloader font size */
    .font-deva.text-2xl {
        font-size: 1.25rem !important;
    }
}

/* Fix RSVP button z-index on mobile so it doesn't overlap important text */
@media (max-width: 640px) {
    .fixed.bottom-0 {
        padding-bottom: env(safe-area-inset-bottom);
    }
}
`;
    fs.writeFileSync('c:/Users/srika/Downloads/marrainvitationge/custom.css', css);
    console.log('Added mobile optimizations to custom.css');
}
