const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5; // [5, 5, '-1': 5, '-2': 5]

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    // array.length evaluates to 2
    sum += array[i]; // sum starts at 0 -> 5 -> 10 -> 15 -> 20
  }

  // further explore: return sum / Object.keys(array).length; // 20 / 2 = 10
  return sum / array.length; // 20 / 2 = 10
}

console.log(average(myArray));

// does the average function return 5?

// no it will return 10, as an array property with a key of anything other
// than a non-negative integer is not counted as part of the array's length
