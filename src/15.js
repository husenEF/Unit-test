const romanConvert = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const roman = number => number.split().map(item => romanConvert[item]).reduce((a, b) => a + b);

module.exports = roman;
