function centerOf(string) {
  let middleTwoChars = string.slice(
    string.length / 2 - 1,
    string.length / 2 + 1
  );
  let middleChar = string[Math.floor(string.length / 2)];

  return string.length % 2 === 0 ? middleTwoChars : middleChar;
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
