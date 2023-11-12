function join(arr) {
  let str = '';
  for (let idx = 0; idx < arr.length; idx++) {
    str += (String(arr[idx]))
  }
  return str;
}

console.log(join([1, 'a', 4]) === '1a4')
