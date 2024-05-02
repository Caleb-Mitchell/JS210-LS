const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);


// this code will log the function `person` itself, as on line 10 the object
// methods are not actually called by appending parentheses.
