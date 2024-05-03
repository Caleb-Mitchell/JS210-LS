function runningTotal(numArray) {
  // create a new empty array
  // iterate over numArray
  // push to new array the sum of the current value of numarray and the sum
  // of everything currently in new array

  let newArray = [];
  numArray.forEach((num, idx) => {
    idx === 0 ? newArray.push(num) : newArray.push(num + newArray[idx - 1]);
  });

  return newArray;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
