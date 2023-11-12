/*

== Problem ==
Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument. (The first
Fibonacci number has an index of 1.)

Input: an integer representing the number of digits of the desired fib number
Output: an integer representing the index at which the first fib number appears,
which has the input number of digits

Rules/Requirements
- the first fib number has an index of 1, not zero
- may assume that the argument is always an integer greater than or
equal to 2


Mental Model
until the last number in the fib sequence is the desired number of digits, keep
adding to the fib array, then return the index of the final number


== Examples/Test Cases ==


== Data Structure(s) ==


== Algorithm ==


== Code (with intent) ==


*/

function countDigits(num) {
  return BigInt([...String(num)].length);
}

function findFibonacciIndexByLength(numDigits) {
  let fibNumOne = 1n;
  let fibNumTwo = 1n;
  let index = 2n;
  let temp;

  while (countDigits(fibNumTwo) !== numDigits) {
    temp = fibNumTwo;
    fibNumTwo += fibNumOne;
    fibNumOne = temp;
    index += 1n;
  }
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
// The last example may take a minute or so to run.
