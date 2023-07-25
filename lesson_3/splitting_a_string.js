/*

problem:
Write a function that takes two arguments:

    a string to be split
    a delimiter character

The function logs the split strings to the console

rules: You may use the square brackets ([]) to access a character by index (as
shown below), and the length property to find the string length. However, you
may not use any other properties or methods from JavaScript's built-in String
class.

mm:
log error if no delimiter

create newString
for each char in string:
  if char is not equal to delimiter
    add char to newString
  else if char is equal to delimiter, or if delimiter is ""
    log newString
    reassign newString to empty string


*/
function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }

  let newString = "";
  for (let idx = 0; idx <= string.length; idx++) {
    if (idx === string.length && newString !== "") {
      console.log(newString);
    } else if (delimiter === "" && idx !== string.length) {
      newString += string[idx];
      console.log(newString);
      newString = "";
    } else if (string[idx] === delimiter) {
      console.log(newString);
      newString = "";
    } else if (string[idx] !== delimiter) {
      newString += string[idx];
    }
  }
}

splitString("abc,123,hello world", ",");
// logs:
// abc
// 123
// hello world

splitString("hello");
// // logs:
// // ERROR: No delimiter
//
splitString("hello", "");
// // logs:
// // h
// // e
// // l
// // l
// // o
//
splitString("hello", ";");
// // logs:
// // hello
//
splitString(";hello;", ";");
// // logs:
// //  (this is a blank line)
// // hello
