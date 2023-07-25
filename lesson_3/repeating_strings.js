/*

problem: Implement a function that takes a string and a number times as
arguments. The function should return the string repeated times number of times.
If times is not a number, return undefined. If it is a negative number, return
undefined also. If times is 0, return an empty string. You may ignore the
possibility that times is a number that isn't an integer.

input: a string, and the number of times to repeat
output: a string, with the original string multiplied

rules: You may concatenate strings, but you may not use any other properties or
methods from JavaScript's built-in String class.

mm:
return undefined if times is less than 0
return "" if times is 0

create empty string
for times:
  concatenated original string to newString

*/

function repeat(string, times) {
  if (!Number.isInteger(times) || times < 0) return undefined;
  if (times === 0) return "";

  let newString = "";
  for (times > 0; times--; ) {
    newString += string;
  }
  return newString;
}

console.log(repeat("abc", 1)); // "abc"
console.log(repeat("abc", 2)); // "abcabc"
console.log(repeat("abc", -1)); // undefined
console.log(repeat("abc", 0)); // ""
console.log(repeat("abc", "a")); // undefined
console.log(repeat("abc", false)); // undefined
console.log(repeat("abc", null)); // undefined
console.log(repeat("abc", "  ")); // undefined
