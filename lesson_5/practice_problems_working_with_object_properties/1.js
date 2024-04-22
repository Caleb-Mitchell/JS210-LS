function objectHasProperty(object, string) {
  // check if object contains a property with the name given by the string
  let objectKeys = Object.keys(object);
  return objectKeys.includes(string) ? true : false;
}

let pets = {
  cat: "Simon",
  dog: "Dwarf",
  mice: null,
};

console.log(objectHasProperty(pets, "dog")); // true
console.log(objectHasProperty(pets, "lizard")); // false
console.log(objectHasProperty(pets, "mice")); // true
