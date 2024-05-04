function union(arr1, arr2) {
  let newArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    newArr.push(arr1[idx]);
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    if (newArr.indexOf(arr2[idx]) !== -1) continue;
    newArr.push(arr2[idx]);
  }

  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
