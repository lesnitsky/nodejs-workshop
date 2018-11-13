const assert = require('assert');
const { calculate } = require('./calc');

assert(calculate(64, 'sqrt') === 8);

assert(calculate(4, 2, '+') === 6);
assert(calculate(3, 5, '*') === 15);

assert.throws(() => {
  calculate('qwe', 42, 'Not a number');
});
