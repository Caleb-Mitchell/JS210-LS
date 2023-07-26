function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This will log:
// 'This is global'

// Because there is no declaration for `myVar` in any outer scope,
// on line 2, JavaScript binds `myVar` to be a `property` of the
// global object. This is almost the same as if `myVar` were globally
// declared.
