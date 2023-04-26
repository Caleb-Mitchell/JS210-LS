function findHighestValue(arr) {
  let result = -Infinity;

  for (let num of arr) {
    if (num > result) {
      result = num;
    }
  }
  return result;
}

console.log(findHighestValue([1, 6, 3, 2]));
console.log(findHighestValue([-1, -6, -3, -2]));
console.log(findHighestValue([2, 2]));

// LS Solution
console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2

// Using a "spread argument" supported in ES6+
console.log(Math.max(...[1, 2, 3]));
