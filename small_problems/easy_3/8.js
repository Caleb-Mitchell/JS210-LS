function swap(string) {
  if (string.length === 1) return string;

  return string
    .split(" ")
    .map((word) => {
      return word[word.length - 1] + word.slice(1, word.length - 2) + word[0];
    })
    .join(" ");
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
