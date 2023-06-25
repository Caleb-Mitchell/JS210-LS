// var myVar = 'This is global';
//
// function someFunction() {
//   var myVar = 'This is local';
// }
//
// someFunction();
// console.log(myVar);

function someFunction() {
  var myVar = 'This is local';
}

var myVar = 'This is global';


someFunction();
console.log(myVar);


// This will log 'This is global', as the variable `myVar` is declared within
// the local scope of function `someFunction`, and therefore is not accessible
// from the the call to console.log in the global scope.
