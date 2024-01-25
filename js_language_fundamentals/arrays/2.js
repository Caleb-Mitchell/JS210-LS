// original

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// alternative 1

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

// alternative 2

let myArray = [1, 2, 3, 4];
let myOtherArray = [];
for (let idx = 0; idx < myArray.length; idx++) {
  myOtherArray.push(myArray[idx]);
}
