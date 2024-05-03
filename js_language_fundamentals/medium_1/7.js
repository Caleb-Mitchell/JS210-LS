// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   // return amount1 + amount2 + amount3 + amount4;
//   return Array.from(arguments).reduce((acc, num) => acc + num);
// }


function invoiceTotal(...args) {
  // return amount1 + amount2 + amount3 + amount4;
  return args.reduce((acc, num) => acc + num);
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
