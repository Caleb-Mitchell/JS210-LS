/*

Problem: Write a function that takes a positive integer as an argument, and logs
all the odd numbers from 1 to the passed in number (inclusive). All numbers
should be logged on separate lines.

input: a positive integer
output: all odd numbers from 1 to the input int, each on a newline

rules: each logged number should be on a newline

mm:
use a for loop
declare a counter variable
for each iteration:
  logg the current number
  increment the number by two
*/

function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 2) {
    console.log(currentNumber);
  }
}

// further exploration
function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
    if (currentNumber % 2 === 0) continue;
    console.log(currentNumber);
  }
}

logOddNumbers(19);
