const myObject = {
  prop1: "123",
  prop2: "234",
  "prop 3": "345",
};

const prop2 = "456";
myObject["prop2"] = "456";
myObject[prop2] = "678";

console.log(myObject[prop2]);
console.log(myObject.prop2);

// local variable prop2 in global scope set to '456'
// prop2 property in object reassigned to '456'
// line 9 sets a property '456' on the object with value '678'

// log 1: '678'
// log 2: '456'

// further exploration

const myObj = {};
myObj[myFunc()] = "hello, "; // calling myFunc() returns 'funcProp', so
// on myObj, property 'funcProp is set to value 'hello, '
// myObj = {
//   funcProp: 'hello, '
// }

function myFunc() {
  return "funcProp";
}
// due to hoisting, this function can be called before it is declared

console.log(myObj); // this logs:
// myObj = {
//   funcProp: 'hello, '
// }
myObj[myFunc()] = "world!";
console.log(myObj); // this logs:
// myObj = {
//   funcProp: 'world!'
// }
