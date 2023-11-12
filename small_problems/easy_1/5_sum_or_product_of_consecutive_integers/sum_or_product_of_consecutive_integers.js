const rlsync = require("readline-sync");

function sumOrProductOfConsecutiveIntegers() {
  let userInt = Number(
    rlsync.question("Please enter an integer greater than 0: ")
  );
  let operator = rlsync.question(
    'Enter "s" to compute the sum, or "p" to compute the product. '
  );

  if (operator === "s") {
    let result = 0;
    for (let i = 1; i <= userInt; i++) {
      result += i;
    }
    console.log(
      `\nThe sum of the integers between 1 and ${userInt} is ${result}.`
    );
  } else if (operator === "p") {
    let result = 1;
    for (let i = 1; i <= userInt; i++) {
      result *= i;
    }
    console.log(
      `\nThe product of the integers between 1 and ${userInt} is ${result}.`
    );
  } else {
    console.log("Oops. Unkown operation.");
  }
}

sumOrProductOfConsecutiveIntegers();
