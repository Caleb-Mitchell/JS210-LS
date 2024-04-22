function copyProperties(objectOne, objectTwo) {
  let count = 0;
  for (let prop in objectOne) {
    objectTwo[prop] = objectOne[prop];
    count += 1;
  }

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal)); // 2
console.log(sal); // { model: 9000, enabled: true }
