const { Builder, By, until } = require('selenium-webdriver');

describe('Reddit App', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('loads the homepage and displays posts', async () => {
    await driver.get('http://localhost:3000');
    const postList = await driver.findElement(By.className('post-list'));
    const posts = await postList.findElements(By.className('post'));
    expect(posts.length).toBeGreaterThan(0);
  });

  it('searches for posts and displays search results', async () => {
    await driver.get('http://localhost:3000');
    const searchInput = await driver.findElement(By.css('.search-bar input'));
    const searchButton = await driver.findElement(By.css('.search-bar button'));
    await searchInput.sendKeys('test');
    await searchButton.click();
    await driver.wait(until.urlContains('/search'), 5000);
    const searchResults = await driver.findElement(By.className('search-results'));
    expect(await searchResults.isDisplayed()).toBe(true);
  });

  // Add more test cases as needed
});