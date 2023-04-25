let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

/*

Both snippets iterate over the keys of myObj. However, for..in iterates over all
of the object's keys, including those in the prototype object, myProtoObj.

*/
