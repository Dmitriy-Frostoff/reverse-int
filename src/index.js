module.exports = function reverse(n) {
  const absNum = Math.abs(n);
  const inputToStr = String(absNum);
  const reverseInt = +inputToStr.split('').reverse().join('');
  return reverseInt;
};
