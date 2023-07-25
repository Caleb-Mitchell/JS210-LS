/*

problem: Implement a function that determines whether a string begins with
another string. If it does, the function should return true, or false otherwise.

input:
a string
a searchString

output:
a boolean

rules: You may use the square brackets ([]) to access a character by index (as
shown below), and the length property to find the string length. However, you
may not use any other properties or methods from JavaScript's built-in String
class.

mm:
for indices in size of string
  check if all chars at same indices of searchstring match


*/

function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx++) {
    if (string[idx] !== searchString[idx]) return false;
  }
  return true;
}

let str = "We put comprehension and mastery above all else";
console.log(startsWith(str, "We")); // true
console.log(startsWith(str, "We put")); // true
console.log(startsWith(str, "")); // true
console.log(startsWith(str, "put")); // false

let longerString = "We put comprehension and mastery above all else!";
console.log(startsWith(str, longerString)); // false
