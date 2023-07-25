/*

problem:
Write a function that returns a string converted to lowercase.

mm:
create a new string
for chars in string:
  if it's not a number
    convert to lowercase using ASCII code
  push to new string
return newstring

*/

function toLowerCase(string) {
  let newString = "";
  for (let idx = 0; idx < string.length; idx++) {
    if (
      String(Number(string[idx])) === string[idx] ||
      string[idx].charCodeAt(0) >= 97
    ) {
      newString += string[idx];
    } else {
      let asciiNumeric = string[idx].charCodeAt(0);
      asciiNumeric += 32;
      newString += String.fromCharCode(asciiNumeric);
    }
  }
  return newString;
}

console.log(toLowerCase("ALPHABET")); // "alphabet"
console.log(toLowerCase("123")); // "123"
console.log(toLowerCase("abcDEF")); // "abcdef"
