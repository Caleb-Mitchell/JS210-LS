/*

== Problem ==
Write a function that determines the mean (average) of the three scores passed
to it, and returns the letter associated with that grade.

Input:
Output:

Rules/Requirements


Mental Model


== Examples/Test Cases ==


== Data Structure(s) ==


== Algorithm ==


== Code (with intent) ==


*/

function getGrade(score1, score2, score3) {
  let mean = (score1 + score2 + score3) / 3;

  if (mean >= 90) {
    return "A";
  } else if (mean >= 80) {
    return "B";
  } else if (mean >= 70) {
    return "C";
  } else if (mean >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
