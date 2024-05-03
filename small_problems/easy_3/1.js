// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 200 (inclusive).

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function randomTeddyAge() {
  console.log(getRandomIntInclusive(20, 200))
}


randomTeddyAge()   // Teddy is 69 years old!
