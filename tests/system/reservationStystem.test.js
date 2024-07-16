const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
}, 120000);

afterAll(async () => {
  await driver.quit();
}, 120000);

describe('Reservation System Test', () => {
  test('Reservation process', async () => {
    await driver.get('http://localhost:3000/memberRegistration.html');
    await driver.wait(until.elementLocated(By.id('firstName')), 40000);
    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('securePassword123');
    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlIs('http://localhost:3000/gymSelection.html'), 40000); 
    await driver.findElement(By.id('gym')).sendKeys('Salle 1');
    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlIs('http://localhost:3000/machineSelection.html'), 40000); 
    await driver.findElement(By.id('machine')).sendKeys('Machine 1');
    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlIs('http://localhost:3000/reservationConfirmation.html'), 40000); 
  }, 120000);
});
