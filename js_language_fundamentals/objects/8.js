function penultimate(string) {
  let strLength = string.split(" ").length;
  return string.split(" ")[strLength - 2];
}

console.log(penultimate("last word")); // expected: "last"
console.log(penultimate("Launch School is great!")); // expected: "is"

// the bug comes from the fact that when we try to reference index -2, because
// arrays are objects, JavaScript implicitly coerces -2 to the string object
// '-2', and checks if the object as a property '-2', returning undefined
// for both cases as it does not. we can instead check for the length of the
// resulting array returned by calling `split`, and subtract 2 for the proper
// array index.
