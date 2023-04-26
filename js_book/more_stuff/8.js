function isNotANumber(value) {
  if (typeof value !== null &&
      typeof value !== 'undefined' &&
      value !== 0 &&
      value !== -0 &&
      value !== 0n &&
      value !== '' &&
      !!value) {
    return false;
  }
  return true;
}

// LS Solution
function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(3));


/*

falsey values

NaN

null, undefined
zeroes
empty string
false


*/
