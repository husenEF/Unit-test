const stringRepeat = require('../src/06');

test('Makan! repeat 2 should return Makan!Makan!', () => {
  expect(stringRepeat('Makan! ', 2)).toMatch('Makan! Makan! ');
});
