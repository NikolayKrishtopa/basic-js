const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let r = 0; r < matrix.length; r++) {
    res.push([]);
    for (let c = 0; c < matrix[r].length; c++) {
      let counter = 0;
      if (r > 0 && c > 0 && matrix[r - 1][c - 1]) counter++;
      if (c > 0 && matrix[r][c - 1]) counter++;
      if (r > 0 && !!matrix[r - 1][c]) counter++;
      if (r < matrix.length - 1 && c > 0 && !!matrix[r + 1][c - 1]) counter++;
      if (c < matrix.length - 1 && r > 0 && !!matrix[r - 1][c + 1]) counter++;
      if (r < matrix.length - 1 && !!matrix[r + 1][c]) counter++;
      if (c < matrix.length - 1 && !!matrix[r][c + 1]) counter++;
      if (
        c < matrix.length - 1 &&
        r < matrix.length - 1 &&
        !!matrix[r + 1][c + 1]
      )
        counter++;
      res[r][c] = counter;
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
