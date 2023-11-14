function unshift(array, value) {
  let arrCopy = array.slice();
  array[0] = value;
  for (let idx = 0; idx < arrCopy.length; idx++) {
    array[idx + 1] = arrCopy[idx];
  }
  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0)); // 4
console.log(count); // [ 0, 1, 2, 3 ]
