const repeat = require('../src/07');

test('to be ', () => {
  expect(repeat('Hello World!')).toBe('Hello World!');
});

test('to be match', () => {
  expect(repeat('Hello World!', 2)).toBe('HHeelllloo WWoorrlldd!!');
});
