const Item = require('../src/12');

test('run findById 3 should return true', () => {
  expect(Item.finByInd(3).isOnSale()).toBeFalsy();
});

test('run findById 5 should return true', () => {
  expect(Item.finByInd(5).isOnSale()).toBeTruthy();
});
