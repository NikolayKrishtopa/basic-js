const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  matrix.forEach((r, ind, matr) =>
    r.forEach((e, i, arr) => {
      if (ind === 0 || matrix[ind - 1][i] !== 0) {
        res += e;
      }
    })
  );
  return res;
}

module.exports = {
  getMatrixElementsSum,
};
