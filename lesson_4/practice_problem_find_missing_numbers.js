// Write a function that takes a sorted array of integers as an argument, and
// returns an array that includes all the missing integers (in order) between
// the first and last elements of the argument.

function missing(sortedArr) {
  // create a new array
  // iterate from the first numer of sortedArr to last number
  // push each number to new array unless it's in sortedArr
  // return new array
  let newArr = [];
  for (let num = sortedArr[0]; num < sortedArr[sortedArr.length - 1]; num++ ) {
    if (!sortedArr.includes(num)) newArr.push(num);
  }
  return newArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
