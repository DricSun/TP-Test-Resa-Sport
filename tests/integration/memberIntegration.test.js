const request = require('supertest');
const app = require('../../src/app');

describe('Member Integration', () => {
  test('Member registration', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'securePassword123'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});