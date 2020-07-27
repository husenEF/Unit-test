const User = require('../src/11');

test('run User.findByUsername("johndoe") should return {id:3, username: "johndoe", name:"John Doe"}', () => {
  expect(User.findByUsername('johndoe')).toEqual({
    id: 3,
    username: 'johndoe',
    name: 'John Doe',
  });
});
