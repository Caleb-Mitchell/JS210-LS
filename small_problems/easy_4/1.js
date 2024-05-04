const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? `0${numString}` : numString;
}

function dms(angleNum) {
  if (angleNum > 360) angleNum = angleNum % 360;

  if (angleNum < 0) {
    angleNum = Math.abs(angleNum);
    angleNum = angleNum > 360 ? angleNum % 360 : angleNum;
    angleNum = 360 - angleNum;
  }

  let minutes = (angleNum % 1) * MINUTES_PER_DEGREE;
  let seconds = (minutes % 1) * SECONDS_PER_MINUTE;

  return `${Math.floor(angleNum)}${DEGREE}${padZeroes(
    Math.floor(minutes)
  )}'${padZeroes(Math.floor(seconds))}"`;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
console.log("----");
console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"
