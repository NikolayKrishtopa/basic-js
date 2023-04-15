const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  const add = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    add.push(String(addition));
  }
  const res = [];
  for (let i = 0; i < repeatTimes; i++) {
    res.push(str + add.join(additionSeparator));
  }
  return res.join(separator);
}

console.log(
  repeater('TESTstr', {
    separator: 'ds',
    addition: 'ADD!',
    additionSeparator: ')))000',
  })
);

module.exports = {
  repeater,
};
