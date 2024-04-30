
let today = new Date()
let weekDay = today.getDay();
let date = today.getDate();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(`Today's date is ${daysOfWeek[weekDay]}, the ${date}th`);
