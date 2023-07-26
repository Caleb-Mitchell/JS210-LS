const rlSync = require('readline-sync');

let phrase = rlSync.question("Please enter a phrase: ");

// remove spaces
let phraseNoSpaces = phrase.replace(/\s/, "");

// filter alphabetic characters
let phraseNoNumbers = phraseNoSpaces.split("")
                                    .filter((char) => isNaN(char));

// find length
let phraseLength = phraseNoNumbers.length;

console.log(`There are ${phraseLength} characters in "${phrase}".`);
