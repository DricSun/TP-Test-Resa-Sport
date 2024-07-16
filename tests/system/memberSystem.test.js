describe('Member System Test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/memberRegistration.html');
  }, 120000); // Augmenter le délai d'attente pour beforeAll

  afterAll(async () => {
    await browser.close();
  }, 120000); // Augmenter le délai d'attente pour afterAll

  test('Member registration', async () => {
    await page.waitForSelector('#firstName');
    await page.type('#firstName', 'John');
    await page.type('#lastName', 'Doe');
    await page.type('#email', 'john.doe@example.com');
    await page.type('#password', 'securePassword123');
    await page.click('button[type="submit"]');

    console.log('Form submitted, waiting for redirection...');
    await page.waitForNavigation({ waitUntil: 'load', timeout: 40000 });
    expect(page.url()).toBe('http://localhost:3000/gymSelection.html');
    console.log('Redirection successful');
  }, 120000); 
});
