function lowerOrUpper (string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(lowerOrUpper("hello world"));
console.log(lowerOrUpper("goodbye"));
