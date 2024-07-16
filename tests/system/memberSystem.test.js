const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
  await driver.quit();
});

describe('Member System Test', () => {
  test('Member registration', async () => {
    await driver.get('http://localhost:3000/memberRegistration.html');
    await driver.wait(until.elementLocated(By.id('firstName')), 10000); // Attente explicite
    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('securePassword123');
    await driver.findElement(By.css('button[type="submit"]')).click();
    
    await driver.wait(until.urlIs('http://localhost:3000/gymSelection.html'), 10000);
  }, 30000); // Délai d'attente de 30 secondes
});