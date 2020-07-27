const arrayMirroring = require('../src/08');

test('[1, 2, 3] should return [1, 2, 3, 3, 2, 1]', () => {
  expect(arrayMirroring([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1]);
});
