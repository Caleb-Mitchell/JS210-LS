/*

Problem: Write a function that logs the integers from 1 to 100 (inclusive) that
are multiples of either 3 or 5. If the number is divisible by both 3 and 5,
append an "!" to the number.

input: no input
output: the multiples of either 3 or 5 from 1 to 100 (inclusive)

rules:
- if a number is divisible by both, append a ! to the number
* logged number should be in single quotes

algo:
iterate over numbers from 1 to 100 inclusive

*/

function multiplesOfThreeAndFive() {
  for (let currentNum = 1; currentNum <= 100; currentNum++) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log(`'${currentNum}!'`);
    } else if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      console.log(`'${currentNum}'`);
    }
  }
}

// multiplesOfThreeAndFive();

// further exploration

function multiplesOfThreeAndFive(minNum, maxNum) {
  for (let currentNum = minNum; currentNum <= maxNum; currentNum++) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log(`'${currentNum}!'`);
    } else if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      console.log(`'${currentNum}'`);
    }
  }
}

multiplesOfThreeAndFive(1, 15);
