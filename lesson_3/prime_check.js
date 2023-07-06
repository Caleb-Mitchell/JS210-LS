/*

Problem: Write a function that takes a number argument, and returns true if the
number is prime, or false if it is not.

input: a number
output: a boolean

rules: input is always a non-negative integer

mm: iterate over 2 to the number minus 1, and return false if it divides
evenly by anything, return true if not


*/

const isPrime = function (number) {
  if (number === 1 || number === 0) return false;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(43)); // true
console.log(isPrime(55)); // false
console.log(isPrime(0)); // false
