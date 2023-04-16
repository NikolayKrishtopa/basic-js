const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const decomposed = str.split('');
  const resArr = [];
  decomposed.forEach((e, i, arr) =>
    i === 0
      ? resArr.push([e])
      : e === arr[i - 1]
      ? resArr[resArr.length - 1].push(e)
      : resArr.push([e])
  );
  return resArr.map((e) => (e.length > 1 ? e.length : '') + e[0]).join('');
}

module.exports = {
  encodeLine,
};
