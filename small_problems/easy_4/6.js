function showMultiplicativeAverage(array) {
  let product = array.reduce((acc, ele) => acc * ele) / array.length;
  return product.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5])); // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
