const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true


// two objects are only equal if they are the same object, so since they are
// two different objects here, they are not equal. We could instead
// initialize otherPerson to point to the same object as person.
