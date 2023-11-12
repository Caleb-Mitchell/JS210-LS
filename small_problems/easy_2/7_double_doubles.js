/*

== Problem ==
Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; otherwise, return the double number
as-is.

Input: a number
Output: a number

Rules/Requirements
A double number is an even-length number whose left-side digits are exactly the
same as its right-side digits.


Mental Model
return the number as is if it's a double number
return it multiplied by two


== Algorithm ==
check if number is a double number
  must be even length
  left half must be the same as right half

if double number, return the input
if not, return input multiplied by two


== Code (with intent) ==


*/

function isDoubleNumber(inputNum) {
  let numArr = [...String(inputNum)];
  let firstHalf = numArr.slice(0, numArr.length / 2).join("");
  let secondHalf = numArr.slice(numArr.length / 2).join("");

  return firstHalf === secondHalf ? true : false;
}

function twice(inputNum) {
  if (isDoubleNumber(inputNum)) {
    return inputNum;
  } else {
    return inputNum * 2;
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
