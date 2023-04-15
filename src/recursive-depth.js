const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth = (arr) => {
    let count = Array.isArray(arr) ? 1 : 0;
    let add = 0;
    if (Array.isArray(arr)) {
      add = Math.max(0, ...arr.map(this.calculateDepth));
      count += add;
    }
    return count;
  };
}

module.exports = {
  DepthCalculator,
};
