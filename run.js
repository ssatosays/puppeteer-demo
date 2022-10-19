const puppeteer = require('puppeteer');

puppeteer.launch({
  args: [
    '--no-sandbox',
    '--disable-gpu'
  ],
  headless: true
}).then(async browser => {
  await demo(browser);
  browser.close();
});

async function demo(browser) {
  const page = await browser.newPage();
  try {
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
    await page.close();
  } catch(e) {
    console.error(e);
    await page.close();
  }
}
