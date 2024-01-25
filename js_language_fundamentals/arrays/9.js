function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6]; // false
oddities(["abc", "def"]) === ["abc"]; // false



// an Array is only equal to another array if they are the same
// array object. So, because the `oddities` function is return it's own
// new array object, this cannot be the same as the other array object in
// the comparisons.
