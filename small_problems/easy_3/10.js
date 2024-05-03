function wordSizes(string) {
  if (string.length === 0) return {};

  let wordSizeTally = {};
  let words = string.split(" ");

  words.forEach((word) => {
    word = word.replace(/[^a-z]/i, "");
    if (!wordSizeTally[String(word.length)]) {
      wordSizeTally[word.length] = 1;
    } else {
      wordSizeTally[word.length] += 1;
    }
  });

  return wordSizeTally;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes("")); // {}
