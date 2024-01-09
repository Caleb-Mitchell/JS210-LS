function push(array, otherValue) {
  array[array.length] = otherValue;
  return array.length;
}

// function pop(array) {
//     if (array.length === 0) {
//     return undefined;
//   }
//
//   let lastEle = array[array.length - 1];
//   array.length = array.length - 1;
//   return lastEle;
// }

// function splice(array, startIdx, numValues) {
//   // need to also remove the elements from array that are added to newArr
//   let newArr = [];
//   for (let idx = 0; idx < numValues; idx++) {
//     push(newArr, array[idx + startIdx]);
//   }
//   console.log(newArr)
//   // create another updatedArr
//   // iterate over array
//   // push values to original array unless idx is between startIdx and (startIdx + numValues)
//   // reassign array to updatedArr
//   let updatedArr = [];
//   for (let idx = 0; idx < array.length; idx++) {
//     if ((idx < startIdx || idx >= (startIdx + numValues))) {
//       push(updatedArr, array[idx])
//     }
//   }
//   array = updatedArr;
//   return newArr;
// }

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  console.log(array)
  array.length = array.length - removedValues.length;
  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
