
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  if (number === 0) return DIGITS[0];

  let sign = number > 0 ? '+' : '-';
  if (number < 0) {
    number *= -1;
  }

  let numArr = [];

  while (number > 0) {
    numArr.push(number % 10);
    number = Math.floor(number / 10);
  }

  let numStrArr = numArr.map((num) => DIGITS[num]);

  return sign + numStrArr.reverse().join("");
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(-123));
