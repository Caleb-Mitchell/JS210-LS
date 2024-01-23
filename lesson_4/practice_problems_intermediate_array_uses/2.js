// Write a function that takes an array argument and returns a new array that
// contains all the argument's elements in their original order followed by all
// the argument's elements in reverse order.

function originalAndReverse(array) {

  let newArray = [];

  // add elements in forward order
  for (let idx = 0; idx < array.length; idx++) {
    newArray.push(array[idx]);
  }

  // add elements in reverse order
  for (let idx = (array.length - 1); idx >= 0; idx--) {
    newArray.push(array[idx]);
  }

  return newArray;
}

// LS
// function mirroredArray(arr) {
//   return arr.concat(arr.slice().reverse());
// }

console.log(originalAndReverse([1, 2, 3]))
