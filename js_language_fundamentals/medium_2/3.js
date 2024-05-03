// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;
//
// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }
//
// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));
//
// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity));

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;


startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// Because startingBalance is reassigned on line 9 before the call to
// totalPayable on line 10, startingBalance references 5 at the time of the
// first function call, then after another reassignment on line 12, it
// references 10 at the time of the second call.


// this is due to the concept of closure
