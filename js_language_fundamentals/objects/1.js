const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]);
myObject[a];
myObject.a;

// the bug is on line 9. The operand inside the brackets when using bracket
// notation to retrieve an Object property must be a string. Javascript sees
// `a` and assumes it is a variable name, but is unable to find a variable
// declared with the name `a`.
