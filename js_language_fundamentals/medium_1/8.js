function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

console.log(total([1, 2, 3]))

// no, there is no explicit return in function `total`, so it
// will return `undefined`

// also, `sum` is not initialized to a value, so it references `undefined`
