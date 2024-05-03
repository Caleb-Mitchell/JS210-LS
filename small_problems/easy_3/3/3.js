let readlineSync = require("readline-sync");

function whenWillIRetire() {
  let currentAge = readlineSync.question("What is your age? ");
  let retireAge = readlineSync.question(
    "At what age would you like to retire? "
  );
  let yearsToGo = retireAge - currentAge;

  let today = Date();
  console.log(today)
  console.log(typeof today)
  console.log(
    `It's ${today.getFullYear()}. You will retire in ${
      today.getFullYear() + yearsToGo
    }.`
  );
  console.log(`You have only ${yearsToGo} years of work to go!`);
}

whenWillIRetire();

// not using the new keyword to create a date object leads to
// `Date()` simply creating a string object with the text of the current date.
