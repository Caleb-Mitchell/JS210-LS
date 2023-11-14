function push(array, otherValue) {
  array[array.length] = otherValue;
  return array.length;
}

let count = [0, 1, 2];
console.log(push(count, 3)); // 4
console.log(count); // [ 0, 1, 2, 3 ]


// yes, Array.prototype.push mutates the array argument
