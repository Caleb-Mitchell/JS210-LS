function generatePattern(nStars) {
  for (let nNumbers = 1; nNumbers <= nStars; nNumbers++) {
    let nums = [];
    for (let currentNum = 1; currentNum <= nNumbers; currentNum++) {
      nums.push(String(currentNum));
    }
    console.log(nums.join('') + '*'.repeat(nStars - nNumbers))
  }
}

generatePattern(7);
