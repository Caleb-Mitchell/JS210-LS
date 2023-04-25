let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let result = [];

Object.keys(obj).forEach((ele) => result.push(ele.toUpperCase()))

console.log(result);

// LS Solution
console.log(Object.keys(obj).map((ele) => ele.toUpperCase()));
