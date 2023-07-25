/*

problem: Write a function that returns a substring of a string based on a
starting index and length.

input:
string
starting index (integer)
length of substring (integer)

rules:
- The start argument is the starting index. If negative, treat it as
strLength + start where strLength is the length of the string. For example, if
start is -3, treat it as strLength - 3.
- The length argument is the maximum length of the desired substring. If length
exceeds the number of characters available, just use the available characters.

mm:
create a newString
make start positive, evaluate

from the start index, to the start index plus length
  if char at index is undefined, continue
  else add char at index to newString
return newString

*/

function substr(string, start, length) {
  let newString = "";
  if (start < 0) start = string.length + start;

  for (let count = 0; count < length; count++) {
    if (string[start] !== undefined) {
      newString += string[start];
    }
    start++;
  }
  return newString;
}

let string = "hello world";

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""
