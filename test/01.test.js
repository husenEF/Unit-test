const charLength = require('../src/01');

test('word hello should return 5', () => {
  expect(charLength('hello')).toBe(5);
});
