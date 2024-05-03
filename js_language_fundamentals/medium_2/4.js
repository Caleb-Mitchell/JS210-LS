// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }
//
// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

function makeDoubler(caller) {
  return function doubler(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const doubler = makeDoubler("Victor");
console.log(doubler(5)); // returns 10
// logs:
// This function was called by Victor.


// This solution leverages that functions in JavaScript are first-class objects.
// It satisfies the requirement that makeDoubler must take a caller name and it
// returns a variation of the doubler function.
