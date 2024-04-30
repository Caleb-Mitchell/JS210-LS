function dateSuffix(dayNum) {
  let lastDigit = dayNum % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

let today = new Date();
let weekDay = today.getDay();
let date = today.getDate();
let month = today.getMonth();
let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(date);
console.log(
  `Today's date is ${daysOfWeek[weekDay]}, ${month} ${date}${dateSuffix(date)}`
);
