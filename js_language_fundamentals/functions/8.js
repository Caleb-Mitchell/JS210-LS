let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// This will log:
// [1, 2, 10]

// objects are not primitives, and as such can be mutated within the
// body of the function.
