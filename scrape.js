const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://invite-charm-58.lovable.app/', { waitUntil: 'networkidle0' });
    
    // Wait for main content to be injected by React
    await page.waitForSelector('main', { timeout: 10000 });
    
    // Get the HTML
    const html = await page.content();
    
    fs.writeFileSync('scraped.html', html);
    await browser.close();
    console.log("Scraping completed.");
})();
