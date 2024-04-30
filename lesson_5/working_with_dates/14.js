function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  hours = hours.length < 2 ? "0" + hours : hours;
  minutes = minutes.length < 2 ? "0" + minutes : minutes;

  return `${hours}:${minutes}`;
}

let date = new Date();
console.log(formatTime(date));

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
