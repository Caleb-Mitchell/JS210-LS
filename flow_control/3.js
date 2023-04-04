function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("Please provide an integer value.");
    return;
  }
  console.log(number % 2 === 0 ? "even" : "odd");
}

evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(5);
evenOrOdd("5");
