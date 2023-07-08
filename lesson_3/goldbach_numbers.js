
const isPrime = function (number) {
  if (number === 1 || number === 0) return false;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};


function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  // from 2 to expectedSum / 2:
    // if num isPrime and expectedSum - num isPrime, log both

  for (let currentNum = 2; currentNum < (expectedSum / 2) + 1; currentNum++) {
    if (isPrime(currentNum) && isPrime(expectedSum - currentNum)) {
      console.log(`${currentNum} ${expectedSum - currentNum}`)
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
