const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((d) => {
    const decomposed = d.split('.');
    for (let i = decomposed.length - 1; i >= 0; i--) {
      const item = '.' + decomposed.slice(i).reverse().join('.');
      !!res[item] ? res[item]++ : (res[item] = 1);
    }
  });
  return res;
}

module.exports = {
  getDNSStats,
};
