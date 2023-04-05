// function oddLengths(array) {
//   // map to lengths
//   let lengthArray = array.map((ele) => ele.length);
//   // filter to odd values
//   return lengthArray.filter((ele) => ele % 2 !== 0);
// }

function oddLengths(array) {
  return array.reduce((acc, string) => {
    if (string.length % 2 === 1) {
      acc.push(string.length);
    }

    return acc;
  }, []);
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
