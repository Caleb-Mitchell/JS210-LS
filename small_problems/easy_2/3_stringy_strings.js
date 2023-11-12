function stringy(numBinaryDigits) {
  let newString = "";
  for (let i = 1; i <= numBinaryDigits; i++) {
    if (i % 2 === 1) {
      newString += "1";
    } else {
      newString += "0";
    }
  }
  return newString;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
