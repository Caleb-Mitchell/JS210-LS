// What side effects are present in the foo function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // arr is mutated outside of the function
  console.log(`popped ${value} from the array`); // text is logged to the console
  return value + bar + baz;
}

foo(qux);
