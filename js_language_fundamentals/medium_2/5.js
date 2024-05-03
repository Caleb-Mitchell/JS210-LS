const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // const array = ['Apples', 'Peaches', 'Grapes', '3.4': Oranges];
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon'; // ['Apples', 'Peaches', 'Grapes', '3.4': Oranges, '-2': Watermelon]
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// The length property of an array only reflects elements on the array, that is,
// values set to properties that are non-negative integers. However,
// Objects.keys will in fact count all properties on the array, even if they are
// not indices.
