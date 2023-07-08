/*

Problem: Create a function that computes the Greatest Common Divisor of two
positive integers.

input: two positive integers
output: the greatest common divisor of the two integers

mm:
from range 1 to the smallest number:
  save the largest value in place, that cleanly divides into both
  return the biggest value


*/

function gcd(num1, num2) {
  let greatestDivisor = 1;
  let smallerInput = num1 < num2 ? num1 : num2;

  for (let currentNum = 1; currentNum <= smallerInput; currentNum++) {
    if (num1 % currentNum === 0 && num2 % currentNum === 0) {
      greatestDivisor = currentNum;
    }
  }
  return greatestDivisor;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
