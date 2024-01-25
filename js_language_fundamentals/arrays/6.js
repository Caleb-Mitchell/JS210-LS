// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(inputForReversal) {
  if (typeof inputForReversal === "string") {
    let newString = "";

    for (let idx = inputForReversal.length - 1; idx >= 0; idx--) {
      newString += inputForReversal[idx];
    }
    return newString;
  } else if (Array.isArray(inputForReversal)) {
    let newArray = [];

    for (let idx = inputForReversal.length - 1; idx >= 0; idx--) {
      newArray.push(inputForReversal[idx]);
    }
    return newArray;
  }
}

console.log(reverse("Hello")); // "olleH"
console.log(reverse("a")); // "a"
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([])); // []

const array = [1, 2, 3];
console.log(reverse(array)); // [3, 2, 1]
console.log(array); // [1, 2, 3]
