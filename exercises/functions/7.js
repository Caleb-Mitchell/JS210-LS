let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);


// This will log 7, this time due to variable shadowing.
