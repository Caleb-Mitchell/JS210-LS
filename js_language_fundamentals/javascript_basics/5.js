let rlSync = require('readline-sync');

let firstNum = Number(rlSync.question("==> Enter the first number:\n"));
let secondNum = Number(rlSync.question("==> Enter the second number:\n"));

let addResult = firstNum + secondNum;
console.log(`${firstNum} + ${secondNum} = ${addResult}`);

// example using concatenation instead of template literals
// console.log(firstNum + " + " + secondNum + " = " + addResult);


let subtractResult = firstNum - secondNum;
console.log(`${firstNum} - ${secondNum} = ${subtractResult}`);

let multiplyResult = firstNum * secondNum;
console.log(`${firstNum} * ${secondNum} = ${multiplyResult}`);

let divideResult = Math.floor(firstNum / secondNum);
console.log(`${firstNum} / ${secondNum} = ${divideResult}`);

let modulusResult = firstNum % secondNum;
console.log(`${firstNum} % ${secondNum} = ${modulusResult}`);

let exponentResult = firstNum ** secondNum;
console.log(`${firstNum} ** ${secondNum} = ${exponentResult}`);
