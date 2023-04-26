function isArgNegativeZero(arg) {
  // return 1 / arg === -Infinity ? true : false;

  // LS Solution, I should stop using ternaries that return a boolean!
  return 1 / arg === -Infinity;

}

console.log(isArgNegativeZero(-0)); // => true
console.log(isArgNegativeZero(0)); // => false
console.log(isArgNegativeZero(5)); // => false
