function repeater(string) {
  return string
    .split("")
    .map((char) => {
      return char.repeat(2);
    })
    .join("");
}

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
