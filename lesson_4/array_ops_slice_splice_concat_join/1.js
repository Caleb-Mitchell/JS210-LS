function push(array, otherValue) {
  array[array.length] = otherValue;
  return array.length;
}

function slice(array, startIdx, endIdx) {
  let newArr = [];
  for (idx = startIdx; idx < endIdx; idx++) {
    push(newArr, array[idx]);
  }
  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
