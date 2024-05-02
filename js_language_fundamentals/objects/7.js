function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true)); // 1400
console.log(calculateBonus(1000, false)); // 0
console.log(calculateBonus(50000, true)); // 25000

// using the arguments object allows us to reference any number of arguments
// passed to the function, in the form of an array-like object, without
// having any parameters defined.

// in this way, we can check for the truthiness of the boolean value,
// passed as the second argument in method invocation, at element 1 using
// bracket notation.
