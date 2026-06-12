const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
    });

    const page = await browser.newPage();

    // Set viewport to match A4 landscape dimensions at 96dpi
    await page.setViewport({ width: 1122, height: 794, deviceScaleFactor: 2 });

    const filePath = path.resolve(__dirname, 'undangan-fisik.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);

    // Hide print guide section
    await page.evaluate(() => {
        const guide = document.querySelector('.print-guide');
        if (guide) guide.style.display = 'none';
    });

    // Generate PDF with proper settings
    await page.pdf({
        path: path.resolve(__dirname, 'undangan-fisik.pdf'),
        width: '297mm',
        height: '210mm',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        tagged: true
    });

    console.log('✅ PDF berhasil dibuat: undangan-fisik.pdf');

    // Generate preview image (JPG) for sharing via WhatsApp
    // WhatsApp can preview images better than PDFs
    await page.setViewport({ width: 1122, height: 794, deviceScaleFactor: 2 });

    // Screenshot page 1 (cover)
    await page.screenshot({
        path: path.resolve(__dirname, 'undangan-fisik-preview.jpg'),
        type: 'jpeg',
        quality: 90,
        clip: { x: 0, y: 0, width: 1122, height: 794 }
    });

    console.log('✅ Preview image dibuat: undangan-fisik-preview.jpg');

    await browser.close();
})();
