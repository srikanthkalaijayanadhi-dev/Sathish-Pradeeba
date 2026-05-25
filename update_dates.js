const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newSection = <section class="relative py-28 px-6 gradient-sacred">
<div class="text-center mb-20 reveal">
  <p class="font-script text-4xl md:text-5xl text-gold text-glow">save the</p>
  <h2 class="font-display text-4xl md:text-6xl gold-text mt-2 uppercase tracking-widest">Sacred Celebrations</h2>
  <p class="mt-4 text-sandal/70 italic font-serif">Two divine celebrations</p>
</div>
<div class="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8 md:gap-12">
  <article class="reveal group relative stone-card rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style="transition-delay:0ms">
    <div class="absolute inset-x-8 -top-px h-px gradient-gold opacity-70"></div>
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
      <div class="w-12 h-12 rounded-full gradient-gold flex items-center justify-center glow-soft">
        <span class="font-display text-royalbrown text-sm font-bold">1</span>
      </div>
    </div>
    <p class="font-tamil-serif text-2xl text-gold mt-6 text-glow font-bold">????????</p>
    <h3 class="font-display text-xl md:text-2xl gold-text mt-2 uppercase tracking-[0.2em]">Muhurtham</h3>
    <div class="my-4 flex items-center justify-center">
      <span class="h-px w-12 bg-gold/40"></span><span class="mx-2 text-gold text-xs">?</span><span class="h-px w-12 bg-gold/40"></span>
    </div>
    <p class="text-sm flex items-center justify-center gap-2 text-sandal/80">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-gold" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
      04.06.2026 · ????????????
    </p>
    <div class="text-[13px] md:text-sm mt-5 text-sandal/90 italic font-tamil-serif leading-[2] space-y-1">
      <p>??????? ???? ????? ??????</p>
      <p>?????? ????? 21-?? ????</p>
      <p>????????? ????, ?????????? ???????????, ??????????</p>
      <p>????? ?????? ????????????</p>
      <p class="text-gold font-semibold">???? 7.31 ??????? ???? 9.00 ?????????</p>
      <p>???? ??????????</p>
    </div>
    <div class="mt-6 pt-6 border-t border-gold/20">
      <p class="text-sm flex items-center justify-center gap-2 text-ivory font-tamil-serif">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 text-gold" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        ??????????? ?????? ????? ?????? ???????
      </p>
      <p class="text-xs text-sandal/70 mt-1 font-tamil-serif">???????????, ???????????</p>
    </div>
    <a href="https://share.google/lWjUYLDo5r01H7aOY" target="_blank" rel="noreferrer" class="mt-5 inline-block text-[10px] tracking-[0.3em] uppercase text-gold border-b border-gold/40 hover:border-gold pb-0.5 transition">View Route ?</a>
  </article>

  <article class="reveal group relative stone-card rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style="transition-delay:60ms">
    <div class="absolute inset-x-8 -top-px h-px gradient-gold opacity-70"></div>
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
      <div class="w-12 h-12 rounded-full gradient-gold flex items-center justify-center glow-soft">
        <span class="font-display text-royalbrown text-sm font-bold">2</span>
      </div>
    </div>
    <p class="font-tamil-serif text-2xl text-gold mt-6 text-glow font-bold">????????</p>
    <h3 class="font-display text-xl md:text-2xl gold-text mt-2 uppercase tracking-[0.2em]">Reception</h3>
    <div class="my-4 flex items-center justify-center">
      <span class="h-px w-12 bg-gold/40"></span><span class="mx-2 text-gold text-xs">?</span><span class="h-px w-12 bg-gold/40"></span>
    </div>
    <p class="text-sm flex items-center justify-center gap-2 text-sandal/80">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-gold" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
      05.06.2026 · ?????????????
    </p>
    <p class="text-sm mt-3 text-gold font-semibold italic font-tamil-serif">???? 6.00 ???????????</p>
    
    <div class="mt-6 pt-6 border-t border-gold/20">
      <p class="text-sm flex items-center justify-center gap-2 text-ivory font-tamil-serif">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 text-gold" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        ???? ??????????? ?????
      </p>
      <p class="text-[13px] text-sandal/70 mt-2 font-tamil-serif leading-relaxed">
        ???????????? ???????<br>
        ???? ?????? ????, ?????????<br>
        <span class="opacity-80">(???? ?????? ?????? ???????)</span>
      </p>
    </div>
    <div class="mt-5 text-left text-[11.5px] text-sandal/80 font-tamil-serif border border-gold/20 rounded-xl bg-gold/5 p-3 leading-[1.6]">
      <p><span class="text-gold font-semibold">???????:</span> ????? ????, ????? ???????? ????????????????? ???????? ??????? ??? ?????????????</p>
      <p class="mt-1.5"><span class="text-gold font-semibold">??? ??????:</span> ??????????? ????</p>
    </div>
    
    <a href="https://share.google/E4fHyEgRCvrxEireJ" target="_blank" rel="noreferrer" class="mt-5 inline-block text-[10px] tracking-[0.3em] uppercase text-gold border-b border-gold/40 hover:border-gold pb-0.5 transition">View Route ?</a>
  </article>
</div>
</section>;

html = html.replace(/<section class="relative py-28 px-6 gradient-sacred"><div class="text-center mb-20 reveal"><p class="font-script text-4xl md:text-5xl text-gold text-glow">save the<\/p><h2 class="font-display text-4xl md:text-6xl gold-text mt-2">Sacred Dates<\/h2>.*?<\/article><\/div><\/section>/s, newSection);

fs.writeFileSync('index.html', html);
console.log('HTML updated successfully');
