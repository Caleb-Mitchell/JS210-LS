function someFunction() {
  console.log(myVar);
}

var myVar;

myVar = 'This is global';

someFunction();

// This will log:
// 'This is global'
// This once again demonstrates how inner scopes have access to everything
// in their outer scope. `myVar` inside the local scope of `someFunction`
// looks for a variable in the local scope, can't find it, so procedes to check
// global scope, where it exists.
