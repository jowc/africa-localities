module.exports = {
  testEnvironment: 'node',
  transform: { '^.+\\.[jt]sx?$': 'babel-jest' },
  moduleNameMapper: {
    '^@services/(.*)$': '<rootDir>/src/data-access/services/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
};
