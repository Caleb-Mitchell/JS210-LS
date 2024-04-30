let today = new Date();

let nextWeek = new Date(today.getTime());

console.log(today);
console.log(nextWeek);

console.log(today === nextWeek);

// they are not equal, because for two Objects to be equal they would need
// to be the same Object.
