const fs = require('fs');
const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

const newUrls = [
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693684/ChatGPT_Image_May_25_2026_11_01_53_AM_yty2xe.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693683/ChatGPT_Image_May_25_2026_12_41_37_PM_o0mivf.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693682/ChatGPT_Image_May_25_2026_12_41_41_PM_faxlm7.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693682/ChatGPT_Image_May_25_2026_12_42_27_PM_wrj7za.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693681/ChatGPT_Image_May_25_2026_12_42_41_PM_q8d6oc.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779686562/ChatGPT_Image_May_23_2026_04_04_08_PM_wagk7o.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779686570/ChatGPT_Image_May_24_2026_04_12_33_AM_wzqiq4.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693823/ChatGPT_Image_May_23_2026_04_48_34_PM_l9dugf.png',
  'https://res.cloudinary.com/dtbm1sjoo/image/upload/v1779693796/ChatGPT_Image_May_23_2026_04_30_14_PM_n9tsn6.png'
];

// Build 9 figure elements with special layout spans and clickable links
const figures = [
  { extra: 'md:row-span-2', delay: 0 },
  { extra: '', delay: 80 },
  { extra: '', delay: 160 },
  { extra: 'md:col-span-2', delay: 240 },
  { extra: '', delay: 320 },
  { extra: '', delay: 400 },
  { extra: '', delay: 480 },
  { extra: '', delay: 560 },
  { extra: '', delay: 640 },
];

const figureHtml = figures.map((f, i) => {
  const url = newUrls[i];
  const extraClass = f.extra ? ` ${f.extra}` : '';
  return `<figure class="reveal relative overflow-hidden rounded-2xl ornate-border group cursor-pointer${extraClass}" style="transition-delay:${f.delay}ms"><a href="${url}" target="_blank" rel="noreferrer" class="block w-full h-full"><img src="${url}" alt="Gallery Image ${i + 1}" loading="lazy" class="w-full h-full object-cover transition duration-1000 group-hover:scale-125"></a><div class="absolute inset-0 bg-gradient-to-t from-royalbrown/90 via-royalbrown/10 to-transparent opacity-70 group-hover:opacity-40 transition pointer-events-none"></div></figure>`;
}).join('');

// Replace the gallery grid content
const gridStart = '<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">';
const gridEnd = '</div></section>';

const startIdx = html.indexOf(gridStart);
if (startIdx === -1) {
  console.error('Could not find gallery grid!');
  process.exit(1);
}

// Find the closing </div></section> after the gallery grid
const searchFrom = startIdx + gridStart.length;
const endIdx = html.indexOf(gridEnd, searchFrom);
if (endIdx === -1) {
  console.error('Could not find end of gallery grid!');
  process.exit(1);
}

html = html.slice(0, startIdx) + gridStart + figureHtml + gridEnd + html.slice(endIdx + gridEnd.length);

fs.writeFileSync(path, html, 'utf8');
console.log('Gallery updated with 9 images, all clickable!');
