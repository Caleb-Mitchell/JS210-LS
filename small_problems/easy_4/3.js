function halvsies(array) {
  if (array.length === 0) return [[], []];
  if (array.length === 1) return [array, []];

  const resultArr = [];
  if (array.length % 2 === 0) {
    resultArr.push(array.slice(0, array.length / 2));
    resultArr.push(array.slice(array.length / 2, array.length));
  } else if (array.length % 2 !== 0) {
    resultArr.push(array.slice(0, array.length / 2 + 1));
    resultArr.push(array.slice(array.length / 2 + 1, array.length));
  }

  return resultArr;
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
