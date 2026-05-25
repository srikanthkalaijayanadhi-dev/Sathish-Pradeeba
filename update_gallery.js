const fs = require('fs');
const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

// New image URLs in order
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

// Find the Temple Gallery section
const sectionRegex = /<section[^>]*>\s*<div class="text-center mb-20 reveal">\s*<p class="font-script[^>]*>[^<]*Temple Gallery[^<]*<\/p>[^]*?<\/section>/s;
const match = html.match(sectionRegex);
if (!match) {
  console.error('Temple Gallery section not found');
  process.exit(1);
}
let sectionHtml = match[0];
// Replace each <img src="..." ...> sequentially
let imgIndex = 0;
sectionHtml = sectionHtml.replace(/<img\s+src=\"[^\"]*\"/g, (imgTag) => {
  const newUrl = newUrls[imgIndex] || newUrls[newUrls.length - 1]; // fallback to last if out of range
  imgIndex++;
  return imgTag.replace(/src=\"[^\"]*\"/, `src=\"${newUrl}\"`);
});
// If there are more URLs than existing images, append extra figures
if (imgIndex < newUrls.length) {
  const gridDivRegex = /<div class=\"max-w-6xl mx-auto grid[^>]*>\s*/;
  const gridMatch = sectionHtml.match(gridDivRegex);
  if (gridMatch) {
    const insertPos = gridMatch.index + gridMatch[0].length;
    let extraHtml = '';
    for (let i = imgIndex; i < newUrls.length; i++) {
      extraHtml += `\n<figure class=\"reveal relative overflow-hidden rounded-2xl ornate-border group cursor-pointer\"><img src=\"${newUrls[i]}\" alt=\"Gallery image ${i+1}\" loading=\"lazy\" class=\"w-full h-full object-cover transition duration-1000 group-hover:scale-125\"/></figure>`;
    }
    sectionHtml = sectionHtml.slice(0, insertPos) + extraHtml + sectionHtml.slice(insertPos);
  }
}
// Replace the original section with updated one
html = html.replace(sectionRegex, sectionHtml);
fs.writeFileSync(path, html, 'utf8');
console.log('Gallery images updated');
