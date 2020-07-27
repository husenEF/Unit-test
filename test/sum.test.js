const sum = require('../src/sum');

test('sum 1 + 2 should not return 2', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum 4 + 5 should return 9', () => {
  expect(sum(4, 5)).toBe(9);
});
