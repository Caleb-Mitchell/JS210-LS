function shift(array) {
  if (array.length === 0) return undefined;

  let shiftEle = array[0];
  array.splice(0, 1);
  return shiftEle;
}

function unshift(array, ...args) {
  // adds one or more elements to the start of an array and returns the new length of
  // the array

  for (let idx = 0; idx < args.length; idx++) {
    // need to add each element to the beginnign of array, in place
    // reverse array, add to end, reverse again
    array.reverse().push(args[idx]);
    array.reverse();
  }

  return array.length;
}

console.log(shift([1, 2, 3])); // 1
console.log(shift([])); // undefined
console.log(shift([[1, 2, 3], 4, 5])); // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6)); // 5
console.log(unshift([1, 2, 3])); // 3
console.log(unshift([4, 5], [1, 2, 3])); // 3
console.log("--------");

const testArray = [1, 2, 3];
console.log(shift(testArray)); // 1
console.log(testArray); // [2, 3]
console.log(unshift(testArray, 5)); // 3
console.log(testArray); // [5, 2, 3]
