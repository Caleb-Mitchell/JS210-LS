function randomInt(min, max) {
  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let idx = 0; idx < 10; idx++) {
  console.log(randomInt(5, 10));

}
