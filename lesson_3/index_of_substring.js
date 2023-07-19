/*

problem:
The indexOf function searches for the first instance of a substring in
firstString that matches the string secondString, and returns the index of the
character where that substring begins.

input: 2 strings
output: an integer, the index of the character of the first matching substring

rules:
- may use square brackets
- may use the length property on strings
- may not use built in String methods

mm:
for each char, idx in firstString:
  return the index if all chars of secondString match from that idx in firstString
*/

function indexOf(firstString, secondString) {
  for (let outerIdx = 0; outerIdx < firstString.length; outerIdx++) {
    if (
      [...secondString].every((innerChar, innerIdx) => {
        return [...firstString][outerIdx + innerIdx] === innerChar;
      })
    ) {
      return outerIdx;
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let indices = [];
  for (let outerIdx = 0; outerIdx < firstString.length; outerIdx++) {
    if (
      [...secondString].every((innerChar, innerIdx) => {
        return [...firstString][outerIdx + innerIdx] === innerChar;
      })
    ) {
      indices.push(outerIdx);
    }
  }
  if (indices.length > 0) {
    return indices[indices.length - 1];
  } else {
    return -1;
  }
}

console.log(indexOf("Some strings", "s")); // 5
console.log(indexOf("Blue Whale", "Whale")); // 5
console.log(indexOf("Blue Whale", "Blute")); // -1
console.log(indexOf("Blue Whale", "leB")); // -1

console.log(lastIndexOf("Some strings", "s")); // 11
console.log(lastIndexOf("Blue Whale, Killer Whale", "Whale")); // 19
console.log(lastIndexOf("Blue Whale, Killer Whale", "all")); // -1
