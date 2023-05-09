let apples = 3;
let bananas = undefined;
let eitherOr = (apples || bananas);
let areEqual = (apples === bananas);

// console.log(areEqual);
console.log(eitherOr);

if (apples === bananas) {
  console.log("They are equal!");
} else {
  if (apples == bananas) {
    console.log("They are not equal");
  } else {
    console.log("These are the same number but different types");
  }
}
