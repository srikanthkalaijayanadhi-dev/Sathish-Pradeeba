const fs = require('fs');

let html = fs.readFileSync('c:/Users/srika/Downloads/marrainvitationge/index.html', 'utf-8');

// Remove the <aside id="lovable-badge"...> to </aside> including inline scripts
html = html.replace(/<aside\s+id="lovable-badge"[^>]*>[\s\S]*?<\/aside>/gi, '');

// The CSS for lovable-badge is inside a <style> block from lines 11 to 169.
// But there might be other styles in that block. 
// Instead of parsing CSS, I'll just remove the whole inline <style> block if it contains lovable-badge,
// but wait, lovable.css should have all the needed styles. The inline <style> might only be for the badge.
// Let's check if the <style> block only contains lovable-badge related CSS.
if (html.includes('#lovable-badge')) {
    html = html.replace(/<style>[\s\S]*?#lovable-badge[\s\S]*?<\/style>/gi, '');
}

fs.writeFileSync('c:/Users/srika/Downloads/marrainvitationge/index.html', html);
console.log('Removed lovable badge HTML and CSS');
