function firstNOf(arr, count) {
  let newArr = [];
  for (let index = 0; index < count; index++) {
    newArr.push(arr[index])
  }
  return newArr;
}

// LS
// function firstNOf(arr, count) {
//   return arr.slice(0, count);
// }
//
// let digits = [4, 8, 15, 16, 23, 42];
// firstNOf(digits, 3);    // returns [4, 8, 15]

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]
