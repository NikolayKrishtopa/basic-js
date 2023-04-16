const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n)
    .split('')
    .map((e) => Number(e));
  const numbers = [];
  arr.forEach((e, i) => {
    numbers.push(
      Number(
        arr
          .filter((e, ind) => i !== ind)
          .map((e) => String(e))
          .join('')
      )
    );
  });
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
