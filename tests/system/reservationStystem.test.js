const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
  await driver.quit();
});

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

describe('Reservation System Test', () => {
    test('Reservation process', async () => {
      // Assuming member registration is already done
      await driver.get('http://localhost:3000/gymSelection.html');
      await sleep(1000);
      await driver.wait(until.elementLocated(By.id('gym')), 20000);
      await sleep(1000);
      await driver.findElement(By.id('gym')).sendKeys('gym1');
      await sleep(1000);
      await driver.findElement(By.css('button[type="submit"]')).click();
      await sleep(1000);
      await driver.findElement(By.id('submit')).click();
      await sleep(1000);
      await driver.wait(until.urlIs('http://localhost:3000/machineSelection.html'), 5000);
      await sleep(1000);
      await driver.findElement(By.id('machine')).sendKeys('Machine 1');
      await sleep(1000);
      await driver.findElement(By.css('button[type="submit"]')).click();
      await sleep(1000);
      await driver.wait(until.urlIs('http://localhost:3000/reservationConfirmation.html'), 5000);
      await sleep(1000);
    }, 20000); // Set timeout to 20000 ms (20 seconds)
  });