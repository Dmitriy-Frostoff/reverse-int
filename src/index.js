/**
 * Reverse any finite number
 * @note always got non - negative result
 *
 * @param {number} n - finite number
 *
 * @returns {number} - reversed number
 *
 *  @example
 *    reverse(42) => 24
 *    reverse(-42) => 24
 *    reverse(9) => 9
 *    reverse(0) => 0
 *
 */
module.exports = function reverse(n) {
  /** @type{number} */
  const absNum = Math.abs(n);

  // digit ? => return it
  if (absNum % 10 === absNum) {
    return absNum;
  }

  /** @type{string} */
  const inputToStr = String(absNum);
  /** @type{number} */
  const reverseInt = +inputToStr.split('').reverse().join('');
  return reverseInt;
};
