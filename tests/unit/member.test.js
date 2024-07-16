const { validateMember } = require('../../src/models/member');

describe('Member Validation', () => {
  test('Valid member details', () => {
    const validMember = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'securePassword123'
    };
    expect(validateMember(validMember)).toBe(true);
  });

  test('Invalid email', () => {
    const invalidMember = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'not-an-email',
      password: 'securePassword123'
    };
    expect(validateMember(invalidMember)).toBe(false);
  });
});