// function logAllOddNums() {
//   for (currentNum = 1; currentNum < 100; currentNum += 2) {
//     console.log(currentNum);
//   }
// }

function logAllOddNums(maxNum) {
  let count = 1;
  while (count <= maxNum) {
    console.log(count);
    count += 2;
  }
}

logAllOddNums(111);
