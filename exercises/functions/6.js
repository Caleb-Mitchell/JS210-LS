let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// This will log 7. Numbers are primitive values, and therefore it cannot
// mutated by the operation inside of the function.
