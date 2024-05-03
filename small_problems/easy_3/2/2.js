// let readlineSync = require("readline-sync");
//
// function formatArr(array) {
//   let arrStr = "";
//   for (let idx = 0; idx < array.length; idx++) {
//     if (idx === array.length - 1) {
//       arrStr += array[idx] + "]";
//       break;
//     } else if (idx === 0) {
//       arrStr += "[" + array[idx] + ", ";
//       continue;
//     }
//     arrStr += array[idx] + ", ";
//   }
//   return arrStr;
// }
//
// function searchNum() {
//   const userNums = [];
//
//   userNums.push(readlineSync.question("Enter the 1st number: "));
//   userNums.push(readlineSync.question("Enter the 2nd number: "));
//   userNums.push(readlineSync.question("Enter the 3rd number: "));
//   userNums.push(readlineSync.question("Enter the 4th number: "));
//   userNums.push(readlineSync.question("Enter the 5th number: "));
//   let lastGuess = readlineSync.question("Enter the last number: ");
//
//   if (userNums.indexOf(lastGuess) !== -1) {
//     console.log(`The Number ${lastGuess} appears in ${formatArr(userNums)}.`);
//   } else {
//     console.log(
//       `The Number ${lastGuess} does not appear in ${formatArr(userNums)}.`
//     );
//   }
// }
//
// searchNum();

// Further Exploration
let readlineSync = require("readline-sync");

function formatArr(array) {
  let arrStr = "";
  for (let idx = 0; idx < array.length; idx++) {
    if (idx === array.length - 1) {
      arrStr += array[idx] + "]";
      break;
    } else if (idx === 0) {
      arrStr += "[" + array[idx] + ", ";
      continue;
    }
    arrStr += array[idx] + ", ";
  }
  return arrStr;
}

// function isIncluded(arr, val) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > val) {
//       return true;
//     }
//   }
//
//   return false;
// }

function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    // if (arr[i] > val) {
    if (arr.some((ele) => ele > 25)) {
      return true;
    }
  }

  return false;
}

function searchNum() {
  const userNums = [];

  userNums.push(readlineSync.question("Enter the 1st number: "));
  userNums.push(readlineSync.question("Enter the 2nd number: "));
  userNums.push(readlineSync.question("Enter the 3rd number: "));
  userNums.push(readlineSync.question("Enter the 4th number: "));
  userNums.push(readlineSync.question("Enter the 5th number: "));
  // let lastGuess = readlineSync.question("Enter the last number: ");

  if (isIncluded(userNums, 25)) {
    console.log(`There is a number greater than 25 in ${formatArr(userNums)}.`);
  } else {
    console.log(`There is NOT a number greater than 25 in ${formatArr(userNums)}.`);
  }
}

searchNum();
