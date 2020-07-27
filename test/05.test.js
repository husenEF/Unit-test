const isPrime = require('../src/05');

test('2 should return true', () => {
  expect(isPrime(2)).toBeTruthy();
});
test('1 should return true', () => {
  expect(isPrime(1)).toBeFalsy();
});
