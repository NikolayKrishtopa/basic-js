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
  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(Date.parse(date)) || date?.toString !== Date.prototype.toString)
    throw new Error('Invalid date!');
  const month = date.getMonth();
  return month < 2
    ? 'winter'
    : month < 6
    ? 'spring'
    : month < 8
    ? 'summer'
    : month < 11
    ? 'autumn'
    : 'winter';
}
module.exports = {
  getSeason,
};
