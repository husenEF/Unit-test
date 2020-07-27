const isogram = require('../src/14');

test('makan should return false', () => {
  expect(isogram('makan')).toBeFalsy();
});

test('gelas should return true', () => {
  expect(isogram('gelas')).toBeTruthy();
});
