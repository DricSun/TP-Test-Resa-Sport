const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

let driver;

beforeAll(async () => {
  // Ajoutez des options pour désactiver le sandbox
  let options = new chrome.Options();
  options.addArguments('--no-sandbox');

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}, 120000);

afterAll(async () => {
  await driver.quit();
}, 120000);

describe('Member System Test', () => {
  test('Member registration', async () => {
    await driver.get('http://localhost:3000/memberRegistration.html');
    await driver.wait(until.elementLocated(By.id('firstName')), 40000);
    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('securePassword123');
    await driver.findElement(By.css('button[type="submit"]')).click();
    
    console.log('Form submitted, waiting for redirection...');
    await driver.wait(until.urlIs('http://localhost:3000/gymSelection.html'), 40000);
    console.log('Redirection successful');
  }, 120000);
});
