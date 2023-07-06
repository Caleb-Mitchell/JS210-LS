/*

Problem: Write a program to determine a student’s grade based on the average of
three scores you get from the user.

input: none
output:
- a prompt asking for input from user (3 integers as strings)
- a statement of the students average letter grade

rules:
- If the average score is greater than or equal to 90 then the grade is 'A'
- If the average score is greater than or equal to 70 and less than 90 then the
grade is 'B'
- If the average score is greater than or equal to 50 and less than 70 then the
grade is 'C'
- If the average score is less than 50 then the grade is 'F'

mm:
ask user for input, 3 times
find average
find and display letter grade based on average
*/

function determineGrade() {
  const rlSync = require("readline-sync");

  const grades = [];
  [1, 2, 3].forEach((scoreNum) => {
    grades.push(Number(rlSync.question(`Enter score ${scoreNum}: `)));
  });

  let gradeAverage = grades.reduce((acc, num) => acc + num, 0) / 3;
  let letterGrade;
  if (gradeAverage >= 90) {
    letterGrade = "A";
  } else if (gradeAverage >= 70 && gradeAverage < 90) {
    letterGrade = "B";
  } else if (gradeAverage >= 50 && gradeAverage < 70) {
    letterGrade = "C";
  } else {
    letterGrade = "F";
  }

  console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`);
}

determineGrade();
