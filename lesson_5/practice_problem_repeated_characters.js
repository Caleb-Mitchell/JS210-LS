function repeatedCharacters(string) {
  let repeatCharTally = {};
  let chars = [...string.toLowerCase()];

  for (let idx = 0; idx < chars.length; idx++) {
    if (Object.keys(repeatCharTally).indexOf(chars[idx]) === -1) {
      repeatCharTally[chars[idx]] = 1;
    } else {
      repeatCharTally[chars[idx]] += 1;
    }
  }

  let lettersFound = Object.keys(repeatCharTally);
  for (let idx = 0; idx < lettersFound.length; idx++) {
    if (repeatCharTally[lettersFound[idx]] < 2) {
      delete repeatCharTally[lettersFound[idx]];
    }
  }

  return repeatCharTally;
}

console.log(repeatedCharacters("Programming")); // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
