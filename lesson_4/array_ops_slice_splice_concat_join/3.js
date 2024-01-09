function push(array, otherValue) {
  array[array.length] = otherValue;
  return array.length;
}

function concat(arrayOne, arrayTwo) {
  let newArr = [];
  for (let index = 0; index < arrayOne.length; index++) {
    push(newArr, arrayOne[index])
  }
  for (let index = 0; index < arrayTwo.length; index++) {
    push(newArr, arrayTwo[index])
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
