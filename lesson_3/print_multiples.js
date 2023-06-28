/*

Problem: Write a function logMultiples that takes one argument number. It should
log all multiples of the argument between 0 and 100 (inclusive) that are also
odd numbers. Log the values in descending order.

input: one number output: log all multiples of the argument between 0 and 100
inclusive that are also odd numbers.

rules:
- number is an integer between 0 and 100.
- log the values in descending order

mm:
find all multiples of the input, that are between 0 and 100


I could iterate from 0 to 100, backwards, and log the number only if it
divides evenly by the argument
*/

function logMultiples(number) {
  for (let currentNum = 100; currentNum >= 0; currentNum--) {
    if (currentNum % number === 0 && currentNum % 2 === 1) {
      console.log(currentNum);
    }
  }
}

logMultiples(17);
logMultiples(21);
