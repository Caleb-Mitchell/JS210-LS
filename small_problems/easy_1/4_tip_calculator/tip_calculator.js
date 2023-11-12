/*
== Problem ==
create a simple tip calculator

Input: none, ask user to bill amount tip rate
Output: log both the tip and the total

Rules/Requirements
- can assume the user will put in numbers


Mental Model
- ask for bill and tip percentage
- calculate tip and total
- log both, formatted correctly


== Examples/Test Cases ==
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

== Data Structure(s) ==
none
*/
let rlSync = require("readline-sync");

function tipCalculator() {
  let bill = parseFloat(rlSync.question("What is the bill? "), 10);
  let tipPercentage = parseFloat(
    rlSync.question("What is the tip percentage? ", 10)
  );

  let tip = bill * (tipPercentage / 100);
  let total = bill + tip;

  console.log(`\nThe tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

tipCalculator();
