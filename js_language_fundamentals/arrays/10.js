function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  // sort both arrays, asc
  // for each idx
  // return false if elements in both arrays at that idx are not equal
  // return true

  // console.log(array1.sort())
  // console.log(array2.sort())
  //
  // for (let index = 0; index < array1.length; index++) {
  //   if (array1[index] !== array2[index]) return false;
  // }
  //
  // return true;

  // for each element in array1, check if array2 includes it the same number
  // of times
  for (let idx = 0; idx < array1.length; idx++) {
    if (
      !array2.includes(array1[idx]) ||
      array1.filter((ele) => ele == array1[idx]).length !==
      array2.filter((ele) => ele == array1[idx]).length
    ) {
      return false;
    }
    return true;
  }
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(areArraysEqual(["a", "b", "c"], ["b", "c", "a"])); // true
console.log(areArraysEqual(["1", 2, 3], [1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])); // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])); // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])); // false
console.log(areArraysEqual([1, 1, 1], [1, 1])); // false
console.log(areArraysEqual([1, 1], [1, 1])); // true
console.log(areArraysEqual([1, "1"], ["1", 1])); // true
