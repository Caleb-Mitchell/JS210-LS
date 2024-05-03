// function repeatedCharacters(string) {
//   let repeatCharTally = {};
//   let chars = [...string.toLowerCase()];
//
//   for (let idx = 0; idx < chars.length; idx++) {
//     if (Object.keys(repeatCharTally).indexOf(chars[idx]) === -1) {
//       repeatCharTally[chars[idx]] = 1;
//     } else {
//       repeatCharTally[chars[idx]] += 1;
//     }
//   }
//
//   let lettersFound = Object.keys(repeatCharTally);
//   for (let idx = 0; idx < lettersFound.length; idx++) {
//     if (repeatCharTally[lettersFound[idx]] < 2) {
//       delete repeatCharTally[lettersFound[idx]];
//     }
//   }
//
//   return repeatCharTally;
// }

function wordSizes(string) {
  if (string.length === 0) return {};

  let wordSizeTally = {};
  let words = string.split(" ");

  words.forEach((word) => {
    // if (Object.keys(wordSizeTally).indexOf(String(word.length)) === -1) {
    // simpler option below since we know we're never checking for `undefined`
    if (!wordSizeTally[String(word.length)]) {
      wordSizeTally[word.length] = 1;
    } else {
      wordSizeTally[word.length] += 1;
    }
  });

  return wordSizeTally;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}
