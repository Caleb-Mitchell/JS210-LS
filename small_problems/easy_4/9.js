const vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

function prettyPrint(pair) {
  for (let key in pair) {
    console.log(key + " => " + pair[key]);
  }
}

function countOccurrences(vehicleArr) {
  let result = {};

  vehicleArr.forEach((vehicle) => {
    if (vehicle in result) {
      result[vehicle] += 1;
    } else {
      result[vehicle] = 1;
    }
  });

  prettyPrint(result);
}

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
