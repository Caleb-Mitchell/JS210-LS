const KEY = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};

function stringToInteger(string) {
  let firstChar = string[0];
  let negOrPosSign;
  if (/[+-]/.test(firstChar)) {
    negOrPosSign = firstChar;
    string = [...string].slice(1);
  }

  string = [...string].reverse().join("");

  let answer = 0;
  [...string].forEach((char, index) => {
    let currentValue = KEY[char];
    let powerOfTen = 10 ** index;
    currentValue *= powerOfTen;
    answer += currentValue;
  });

  if (negOrPosSign === "-") {
    answer *= -1;
  }

  return answer;
}

console.log(stringToInteger("4321"));
