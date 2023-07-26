function someFunction() {
  myVar = 'This is local';
}

var myVar;

myVar = 'This is global';


someFunction();
console.log(myVar);

// This will log:
// 'This is local'

// This is because when function `someFunction` is invoked,
// `myVar` is reassigned to `This is local`, affecting the value referenced
// by `myVar` in the outer scope. This demonstrates that inner scopes have
// access to everything in their outer scope.
