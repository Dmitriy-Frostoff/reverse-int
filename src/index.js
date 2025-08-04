module.exports = function reverse(n) {
    let absNum = Math.abs(n);
    let inputToStr = String(absNum);
    let reverseInt = +inputToStr.split("").reverse().join("");
    return reverseInt;
};
