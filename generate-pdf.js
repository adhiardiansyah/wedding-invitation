const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, 'undangan-fisik.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Hide print guide section
    await page.evaluate(() => {
        const guide = document.querySelector('.print-guide');
        if (guide) guide.style.display = 'none';
    });

    await page.pdf({
        path: path.resolve(__dirname, 'undangan-fisik.pdf'),
        width: '297mm',
        height: '210mm',
        landscape: false, // already set as 297x210 (landscape dimensions)
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('✅ PDF berhasil dibuat: undangan-fisik.pdf');
    await browser.close();
})();
