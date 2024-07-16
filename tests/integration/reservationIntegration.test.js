const request = require('supertest');
const app = require('../../src/app');

describe('Reservation Integration', () => {
  test('Reservation creation', async () => {
    // Create a member first
    const memberResponse = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'securePassword123'
      });
    const memberId = memberResponse.body.id;

    // Create a reservation
    const reservationResponse = await request(app)
      .post('/reserve')
      .send({
        memberId: memberId,
        gymId: 1,
        machineId: 1,
        date: '2024-07-15'
      });
    expect(reservationResponse.statusCode).toBe(201);
    expect(reservationResponse.body).toHaveProperty('id');
  });
});