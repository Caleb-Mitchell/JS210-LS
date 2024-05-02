const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  let midnight = new Date("1/1/2000 00:00");
  console.log(midnight)

  midnight.setTime(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  return midnight.toTimeString().split(" ")[0].split("").slice(0, 5).join("");
}

console.log(timeOfDay(0)); // "00:00"
console.log(timeOfDay(-3)); // "23:57"
console.log(timeOfDay(35)); // "00:35"
console.log(timeOfDay(-1437)); // "00:03"
console.log(timeOfDay(3000)); // "02:00"
console.log(timeOfDay(800)); // "13:20"
console.log(timeOfDay(-4231)); // "01:29"
