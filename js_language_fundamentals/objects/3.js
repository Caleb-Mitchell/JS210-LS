const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo',];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    // array1[i] = array1[i].toUpperCase();
    array1[i].toUpperCase();
  }
}

console.log(array2);


// this will log ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
// array1 is modified, but array2 is not, because even though array1 is an object
// and thus mutable, its elements are string primitives and thus immutable
