function join(array, string) {
  let newString = '';
  for (let index = 0; index < (array.length - 1); index++) {
    newString += `${String(array[index])}${string}`
  }

  newString += `${String(array[array.length - 1])}`
  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
