let rlSync = require("readline-sync");

function howBigIsTheRoom() {
  const SQUARE_METER_IN_FEET = 10.7639;

  console.log("Enter the length of the room in meters:");
  let roomLength = rlSync.prompt();
  roomLength = parseInt(roomLength, 10);

  console.log("Enter the width of the room in meters:");
  let roomWidth = rlSync.prompt();
  roomWidth = parseInt(roomWidth, 10);

  let roomAreaMeters = roomLength * roomWidth;
  let roomAreaFeet = roomAreaMeters * SQUARE_METER_IN_FEET;

  return console.log(
    `The area of the room is ${roomAreaMeters.toFixed(
      2
    )} square meters (${roomAreaFeet.toFixed(2)} square feet).`
  );
}

howBigIsTheRoom();
