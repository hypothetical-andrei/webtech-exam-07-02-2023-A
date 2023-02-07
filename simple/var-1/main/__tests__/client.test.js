const puppeteer = require('puppeteer')

let browser
let page

describe('local', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({headless : true})
    page = await browser.newPage()
  })

  it('should be able to click reload', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#reload')
    await page.click('#reload')
  })

  it('there are two elements in the list if nothing is selected', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#reload')
    await page.click('#reload')
    await page.waitForSelector('#main')
    const content = await page.$$('#main tr')
    let contentArray = Array.apply(null, content)
    expect(contentArray.length).toEqual(2)
  })

  it('if red is selected only one element is loaded', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#filter')
    await page.focus('#filter')
    page.keyboard.type('red')
    await page.waitForSelector('#reload')
    await page.click('#reload')
    await page.waitForSelector('#main')
    const first = await page.$eval("#main tr:first-child td:first-child", e => e.textContent)
    expect(first.trim()).toEqual('a')
  })

  it('the list is empty if filter does not match anything', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#filter')
    await page.focus('#filter')
    page.keyboard.type('orange')
    await page.waitForSelector('#reload')
    await page.click('#reload')
    await page.waitForSelector('#main')
    const content = await page.$$('#main tr')
    let contentArray = Array.apply(null, content)
    expect(contentArray.length).toEqual(0)
  })


  afterAll(() => {
    browser.close()
  })
})