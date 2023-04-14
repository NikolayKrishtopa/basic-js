const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const month = date.getMonth();
  return month < 2
    ? 'winter'
    : month < 5
    ? 'spring'
    : month < 8
    ? 'autumn'
    : 'winter';
}

module.exports = {
  getSeason,
};
