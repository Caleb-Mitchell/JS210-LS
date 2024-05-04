const CONSONANTS = /[qwrtypsdfghjklzxcvbnm]/i;

function doubleConsonants(string) {
  return string
    .split("")
    .map((char) => {
      return CONSONANTS.test(char) ? char.repeat(2) : char;
    })
    .join("");
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
