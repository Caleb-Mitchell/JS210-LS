function pop(array) {

  // LS
    if (array.length === 0) {
    return undefined;
  }

  let lastEle = array[array.length - 1];
  array.length = array.length - 1;
  return lastEle;
}

let count = [1, 2, 3];
console.log(pop(count)); // 3
console.log(count); // [ 1, 2 ]

// yes, Array.prototype.pop mutates the array argument
