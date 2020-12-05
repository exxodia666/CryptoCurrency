const {default: fetch_coins} = require('./fetch_coins');

console.log(fetch_coins());

test('Fetching coins from API', () => {
  expect(fetch_coins).toBe({});
});
