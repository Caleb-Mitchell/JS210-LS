// case insensitive, and ignore all non-alphanumeric chars

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function isRealPalindrome(string) {
  let plainString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  return isPalindrome(plainString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
