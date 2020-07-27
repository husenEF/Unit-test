const censor = require('../src/10');

test('input saya makan nasi goreng and , ["saya","nasi"] should return #### ingin makan #### goreng', () => {
  expect(censor('saya ingin makan nasi goreng', ['saya', 'nasi'])).toMatch('#### ingin makan #### goreng');
});
