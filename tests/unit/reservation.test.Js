const { validateReservation } = require('../../src/models/reservation');

describe('Reservation Validation', () => {
  test('Valid reservation details', () => {
    const validReservation = {
      memberId: 1,
      gymId: 1,
      machineId: 1,
      date: '2024-07-15'
    };
    expect(validateReservation(validReservation)).toBe(true);
  });

  test('Invalid date', () => {
    const invalidReservation = {
      memberId: 1,
      gymId: 1,
      machineId: 1,
      date: 'invalid-date'
    };
    expect(validateReservation(invalidReservation)).toBe(false);
  });
});