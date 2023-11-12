/*

== Problem ==
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces.

Input: a string
Output: a string, with non-alphabetic chars replaced with spaces

Rules/Requirements
- the result string should never have consecutive spaces


Mental Model
split input by chars
for each char in input
  if char is non alphabetic and last char in result is not a space, append a space
  if char is alphabetic, append char to result
resut result

*/

function cleanUp(inputStr) {
  let inputArr = [...inputStr];
  let result = [];

  inputArr.forEach((char) => {
    if (!/[a-z]/i.test(char) && result[result.length - 1] !== " ") {
      result.push(" ");
    } else if (!/[a-z]/i.test(char)) {
      return;
    } else {
      result.push(char);
    }
  });
  return result.join("");
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
