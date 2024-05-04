function swapName(string) {
  let nameArr = string.split(" ");

  return `${nameArr[1]}, ${nameArr[0]}`;
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
