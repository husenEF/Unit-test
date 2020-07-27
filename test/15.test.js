const roman = require('../src/15');

test("roman('I')   should return  1", () => {
  expect(roman('I')).toBeTruthy();
});

test("roman('II')  should return  2", () => {
  expect(roman('II')).toBeTruthy();
});

test("roman('III') should return  3", () => {
  expect(roman('III')).toBeTruthy();
});

test("roman('V')   should return  5", () => {
  expect(roman('V')).toBeTruthy();
});

test("roman('VI')  should return  6", () => {
  expect(roman('VI')).toBeTruthy();
});

test("roman('X')   should return  10", () => {
  expect(roman('X')).toBeTruthy();
});

test("roman('L')   should return  50", () => {
  expect(roman('L')).toBeTruthy();
});

test("roman('C')   should return  100", () => {
  expect(roman('C')).toBeTruthy();
});

test("roman('D')   should return  500", () => {
  expect(roman('D')).toBeTruthy();
});

test("roman('M')   should return  1000", () => {
  expect(roman('M')).toBeTruthy();
});

test("roman('MMXVIII') should return  2018", () => {
  expect(roman('MMXVIII')).toBeTruthy();
});
