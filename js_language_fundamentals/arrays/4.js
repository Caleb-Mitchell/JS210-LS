function concat(array1, ...otherArgs) {
  let newArr = [];

  for (let idx = 0; idx < array1.length; idx++) {
    newArr.push(array1[idx]);
  }

  for (let argIdx = 0; argIdx < otherArgs.length; argIdx++) {
    if (Array.isArray(otherArgs[argIdx])) {
      for (let idx = 0; idx < otherArgs[argIdx].length; idx++) {
        newArr.push(otherArgs[argIdx][idx]);
      }
    } else {
      newArr.push(otherArgs[argIdx]);
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], "a", ["one", "two"])); // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ["three"], 4)); // [1, 2, "three", 4]
