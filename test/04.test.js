const isLeapYear = require('../src/04');

test('insert 2000 should return true', () => {
  expect(isLeapYear(2000)).toBe(true);
});
