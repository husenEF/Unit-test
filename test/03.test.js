const mebiToKibi = require('../src/03');

test('1 mebibyte should return 1024', () => {
  expect(mebiToKibi(1)).toBe(1024);
});
