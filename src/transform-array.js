const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const ACTIONS = {
    DISCARD_NEXT: `--discard-next`,
    DISCARD_PREV: `--discard-prev`,
    DOUBLE_NEXT: `--double-next`,
    DOUBLE_PREV: `--double-prev`,
  };

  const handle = (element, index, arr) => {
    if (!Object.values(ACTIONS).includes(element)) {
      return arr;
    } else {
      switch (element) {
        case ACTIONS.DISCARD_NEXT:
          if (!arr[index + 1]) {
            arr.pop();
          } else if (
            arr[index + 2] === ACTIONS.DISCARD_PREV ||
            arr[index + 2] === ACTIONS.DOUBLE_PREV
          ) {
            arr.splice(index, 3);
          } else {
            arr.splice(index, 2);
          }
          break;
        case ACTIONS.DISCARD_PREV:
          if (!arr[index - 1]) {
            arr.shift();
          } else {
            arr.splice(index - 1, 2);
          }
          break;
        case ACTIONS.DOUBLE_NEXT:
          if (!arr[index + 1]) {
            arr.pop();
          } else {
            arr[index] = arr[index + 1];
          }
          break;
        case ACTIONS.DOUBLE_PREV:
          if (!arr[index - 1]) {
            arr.shift();
          } else {
            arr[index] = arr[index - 1];
          }
          break;
        default:
          break;
      }
    }
  };
  const mutable = [...array];
  mutable.forEach(handle);
  return mutable;
}

module.exports = {
  transform,
};
