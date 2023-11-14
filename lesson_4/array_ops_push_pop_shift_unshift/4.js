function shift(array) {
  let removedEle = array[0];
  let arrCopy = array.slice(); // [1, 2, 3]

  for (let idx = 1; idx < arrCopy.length; idx++) {
    array[idx - 1] = arrCopy[idx];
  }

  array.length -= 1;
  return removedEle;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
