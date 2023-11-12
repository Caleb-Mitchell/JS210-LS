// function logAllEvenNums() {
//   for (currentNum = 2; currentNum < 100; currentNum += 2) {
//     console.log(currentNum);
//   }
// }

function logAllEvenNums(maxNum) {
  let count = 2;
  while (count <= maxNum) {
    console.log(count);
    count += 2;
  }
}

// could also count by 1 but log if even or if odd

logAllEvenNums(111);
