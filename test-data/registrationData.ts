export const registrationData = {
  valid: {
    email: 'qa.test2026@gmail.com',
    password: 'A@12345678',
    confirmPassword: 'A@12345678',
  },

  invalidEmail: {
    email: 'invalid-email',
    password: 'A@12345678',
    confirmPassword: 'A@12345678',
  },

  shortPassword: {
    email: 'qa.test2026@gmail.com',
    password: 'A@123',
    confirmPassword: 'A@123',
  },

  noUppercase: {
    email: 'qa.test2026@gmail.com',
    password: 'a@12345678',
    confirmPassword: 'a@12345678',
  },

  noNumber: {
    email: 'qa.test2026@gmail.com',
    password: 'A@abcdefgh',
    confirmPassword: 'A@abcdefgh',
  },

  noSpecialCharacter: {
    email: 'qa.test2026@gmail.com',
    password: 'A12345678',
    confirmPassword: 'A12345678',
  },

  passwordMismatch: {
    email: 'qa.test2026@gmail.com',
    password: 'A@12345678',
    confirmPassword: 'A@12345679',
  },
};
