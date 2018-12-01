export default {
  username: {
    presence: true,
    length: {
      minimum: 4,
      maximum: 30,
    },
    format: {
      pattern: '[a-z0-9]+',
      flags: 'i',
      message: 'can only contain a-z and 0-9',
    },
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
    },
  },
  firstname: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 30,
    },
    format: {
      pattern: '[a-z]+',
      flags: 'i',
      message: 'can only contain a-z',
    },
  },
  lastname: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 30,
    },
    format: {
      pattern: '[a-z]+',
      flags: 'i',
      message: 'can only contain a-z',
    },
  },
};
