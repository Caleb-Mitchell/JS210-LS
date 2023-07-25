/*

problem:
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a
String into a new String:

Write a Function, rot13, that takes a String and returns that String transformed
by the rot13 cipher.

input: string
output: transformed string

mm:
For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the
character 13 positions later in the alphabet. Thus, a becomes n. If you reach
the end of the alphabet, return to the beginning. Thus, o becomes b.


rules:
- Letter transformations preserve case. A becomes N while a becomes n.
- Don't modify characters that are not letters.

- applying rot13 twice results in the original string

* punctuation and spaces are preserved
*/

function rotateChar(char, rotationAmount) {
  const ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz";

  let charIdx = ALPHA_LOWER.split("").indexOf(char.toLowerCase());
  let newCharIdx = (charIdx + rotationAmount) % ALPHA_LOWER.length;
  let newChar = ALPHA_LOWER.split("")[newCharIdx];

  return /[a-z]/.test(char) ? newChar : newChar.toUpperCase();
}

function rot13(string) {
  const ROTATION_AMOUNT = 13;

  let newArr = [...string].map((char) => {
    return /[a-z]/i.test(char) ? rotateChar(char, ROTATION_AMOUNT) : char;
  });
  return newArr.join("");
}

console.log(rot13("Teachers open the door, but you must enter by yourself."));
// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(
  rot13(rot13("Teachers open the door, but you must enter by yourself."))
);
// logs:
// Teachers open the door, but you must enter by yourself.
