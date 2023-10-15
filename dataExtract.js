const {join} = require('path');

const fs = require("fs/promises")
async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://app.roll20.net/editor/')
    
    const names = await page.evaluate(() => {
       return Array.from(document.querySelectorAll("#ui-id-10")).map(x => x.textContent)
    })
    await fs.writeFile('names.txt', names.join("\r\n"))

    await browser.close()
}

start()