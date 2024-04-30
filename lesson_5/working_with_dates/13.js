
let today = new Date();

let nextWeek = new Date(today.getTime());
nextWeek.setDate(today.getDate() + 7);

console.log(today);
console.log(nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());
