/*

== Problem == Write a function that takes a string argument and returns a new
string that contains the value of the original string with all consecutive
duplicate characters collapsed into a single character.

Input: a string
Output: a new string


Mental Model
for each char
  move it to a new empty array
  if char is the same as the last element in array, don't do anything with it
join and return


*/

function crunch(string) {
  let newChars = [];
  [...string].forEach((char) => {
    if (newChars[newChars.length - 1] !== char) newChars.push(char);
  });
  return newChars.join("");
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
