const request = require('supertest');
const app = require('../../src/app');

let server;

beforeAll((done) => {
  server = app.listen(0, () => {
    const port = server.address().port;
    global.port = port;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

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
