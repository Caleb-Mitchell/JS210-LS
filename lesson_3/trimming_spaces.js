/*

problem: Write a function that takes a string as an argument, and returns the
string stripped of spaces from both ends. Do not remove or alter internal
spaces.

input: a string
output: a string with spaces removed from both ends

rules: - do not alter or remove internal spaces
- You may use the square brackets
([]) to access a character by index (as shown below), and the length property to
find the string length. However, you may not use any other properties or methods
from JavaScript's built-in String class.

mm:
initialize newString
set flag char_found to false
start iterating over characters in original String
  if char is a space and char_found is false, continue
  if char is not a space, set char_found to true and add char to newString

*/

function removeLeadingSpaces(string) {
  let newStringArr = [];
  let char_found = false;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === " " && !char_found) {
      continue;
    } else {
      char_found = true;
      newStringArr.push(string[idx]);
    }
  }
  return newStringArr.join("");
}

function removeTrailingSpaces(string) {
  // same process, but in reverse
  let newStringArr = [];
  let char_found = false;
  for (let idx = string.length - 1; idx >= 0; idx--) {
    if (string[idx] === " " && !char_found) {
      continue;
    } else {
      char_found = true;
      newStringArr.unshift(string[idx]);
    }
  }
  return newStringArr.join("");
}

function trim(string) {
  let result = removeLeadingSpaces(string);
  return removeTrailingSpaces(result);
}

console.log(trim("  abc  ")); // "abc"
console.log(trim("abc   ")); // "abc"
console.log(trim(" ab c")); // "ab c"
console.log(trim(" a b  c")); // "a b  c"
console.log(trim("      ")); // ""
console.log(trim("")); // ""
