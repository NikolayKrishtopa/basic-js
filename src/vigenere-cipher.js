const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = !!reverse;
    this.alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    const encrypted = [];
    key = key.repeat(Math.ceil(str.length / key.length));
    str.split('').forEach((e, i) => {
      if (this.alphabet.includes(e.toLowerCase())) {
        let index =
          this.alphabet.indexOf(e.toLowerCase()) +
          this.alphabet.indexOf(key[i].toLowerCase());
        index >= this.alphabet.length
          ? (index -= this.alphabet.length)
          : index < 0
          ? (index += this.alphabet.length - 1)
          : null;
        encrypted.push(this.alphabet[index]);
      } else {
        encrypted.push(e);
        key = e + key;
      }
    });
    return this.reverse
      ? encrypted.reverse().join('').toUpperCase()
      : encrypted.join('').toUpperCase();
  }
  decrypt(str, key) {
    if (this.reverse) str = str.split('').reverse().join('');
    if (!str || !key) throw new Error('Incorrect arguments!');
    const decrypted = [];
    key = key.repeat(Math.ceil(str.length / key.length));
    str.split('').forEach((e, i) => {
      if (!this.alphabet.includes(e.toLowerCase())) {
        decrypted.push(e);
        key = e + key;
      } else {
        let index =
          this.alphabet.indexOf(e.toLowerCase()) -
          this.alphabet.indexOf(key[i].toLowerCase());
        index >= this.alphabet.length
          ? (index -= this.alphabet.length)
          : index < 0
          ? (index += this.alphabet.length)
          : null;
        decrypted.push(this.alphabet[index]);
      }
    });
    return decrypted.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
