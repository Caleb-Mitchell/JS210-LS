function uniqueElements(arr) {
  let newArr = [];

  for (idx = 0; idx < arr.length; idx++) {
    if (!newArr.includes(arr[idx])) newArr.push(arr[idx]);
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
