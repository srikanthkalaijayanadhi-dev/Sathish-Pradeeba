const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const startStr = '<p class="font-deva text-2xl md:text-3xl text-gold text-glow mb-3">॥ ॐ श्री गणेशाय नमः ॥</p>';
const searchContext = 'Sathish</h2>';
const endStr = '<span class="text-sm tracking-[0.25em] uppercase text-ivory">Thursday · 4 June 2026</span></div>';

const contextIndex = html.indexOf(searchContext);
const startIndex = html.lastIndexOf(startStr, contextIndex);
const endIndex = html.indexOf(endStr, contextIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const fullEndIndex = endIndex + endStr.length;
    
    const newContent = `
<div class="mb-8">
  <img src="https://invite-charm-58.lovable.app/assets/kolam-8PYgf1pk.png" alt="Mandala" class="w-16 h-16 mx-auto mb-4 opacity-80" style="animation: spin 20s linear infinite;">
  <p class="font-deva text-xl md:text-2xl text-gold text-glow mb-2" style="font-family: 'Tiro Devanagari Sanskrit', serif;">ஸ்ரீ கணேஷாய நமஹ ||</p>
  <p class="font-deva text-xl md:text-2xl text-gold text-glow mb-2" style="font-family: 'Tiro Devanagari Sanskrit', serif;">II ஓம் நமோ நாராயணாய ||</p>
  <p class="font-deva text-2xl md:text-3xl text-gold text-glow mb-6" style="font-family: 'Tiro Devanagari Sanskrit', serif;">ஓம்</p>
  <p class="font-serif text-lg md:text-xl text-gold leading-relaxed max-w-2xl mx-auto">விநாயகப் பெருமானின் அருளால் விஷ்ணு பகவான் மற்றும் லட்சுமி தேவி மங்களகரமான திருமண விழாவிற்கு உங்களை அன்புடன் அழைக்கிறோம்.</p>
</div>

<div class="mt-12">
  <h2 class="font-display text-5xl md:text-7xl gold-text text-glow">B. சதீஸ்குமார்</h2>
  <p class="text-xs md:text-sm tracking-[0.2em] uppercase text-sandal/70 mt-3 font-serif">B.E., (Mech)</p>
</div>

<div class="my-8 flex items-center justify-center gap-4">
  <div class="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
  <span class="text-gold text-2xl">❖</span>
  <div class="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
</div>

<div class="mb-12">
  <h2 class="font-display text-5xl md:text-7xl gold-text text-glow">S. ப்ரதேபா</h2>
  <p class="text-xs md:text-sm tracking-[0.2em] uppercase text-sandal/70 mt-3 font-serif">M.Sc, (Phy), B.Ed., PGDCA</p>
</div>

<div class="mt-12 space-y-6">
  <p class="font-serif text-sm tracking-[0.3em] uppercase text-gold">வரவேற்பு • திண்டுக்கல்</p>
  <div class="inline-block border border-gold/40 rounded-full px-8 py-3 bg-gold/5 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]">
    <p class="font-serif text-lg tracking-[0.2em] uppercase text-ivory">04.06.2026 • வெள்ளிக்கிழமை</p>
  </div>
</div>

<div class="mt-10 font-serif text-lg text-ivory/90 leading-relaxed max-w-md mx-auto space-y-2">
  <p>திண்டுக்கல் நாயுடு மகாஜன திருமண மண்டபம்</p>
  <p>ரவுண்ட்ரோடு, திண்டுக்கல்</p>
</div>

<p class="mt-12 text-xs tracking-[0.3em] uppercase text-sandal/60">இரு குடும்பத்தினரிடமிருந்தும் :: நல்வாழ்த்துக்களுடன் ::</p>
`;

    const updatedHtml = html.substring(0, startIndex) + newContent + html.substring(fullEndIndex);
    fs.writeFileSync('index.html', updatedHtml);
    console.log("Successfully replaced the content.");
} else {
    console.log("Could not find the target section to replace.");
    console.log("start:", startIndex, "end:", endIndex);
}
