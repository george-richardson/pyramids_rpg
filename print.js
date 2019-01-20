const puppeteer = require('puppeteer');
const path = require("path");

var htmlPath = process.argv[2];
var pdfOutputPath = process.argv[3];

var absoluteHtmlPath = path.resolve(htmlPath);

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('file:///' + absoluteHtmlPath);
	await page.evaluateHandle('document.fonts.ready');
	await page.pdf({ path: pdfOutputPath, format: 'A4', printBackground: true });

	await browser.close();
})();