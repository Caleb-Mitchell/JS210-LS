/*

Problem: Write a password guessing program that tracks how many times the user
enters the wrong password.

input: none
output: a prompt asking for the password, and
further prompts based on the user input

rules:
- set the password as a constant to password

mm:
set the password
declare a variable to a counter

while the counter is less than 3:
  ask the user for the password
  compare user imput to the stored password

*/

function askForPass() {
  const rlSync = require("readline-sync");

  const PASSWORD = "password";
  let passAttempts = 0;

  while (passAttempts < 3) {
    passAttempts += 1;
    let userInput = rlSync.question("What is the password: ");
    if (userInput === PASSWORD) {
      console.log("You have successfully logged in.");
      return;
    }
  }
  console.log("You have been denied access.");
}

askForPass();
