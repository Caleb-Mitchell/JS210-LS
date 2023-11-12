/*

== Problem ==
Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left of
the triangle, and the other end at the upper-right.

Input: an integer, representing the number of starts on all three sides
Output: a triangle made of *'s

Rules/Requirements
- The hypotenuse of the triangle (the diagonal side in the images below) should
have one end at the lower-left of the triangle, and the other end at the
upper-right.


Mental Model
for each number from 1 to n:
  log a number of spaces n - the current number
  log the current number, number of stars


== Algorithm ==


== Code (with intent) ==


*/

function triangle(numStarsPerSide) {
  for (let currentNum = 1; currentNum <= numStarsPerSide; currentNum++) {
    console.log(`${' '.repeat(numStarsPerSide - currentNum)}${'*'.repeat(currentNum)}`)
  }
}

triangle(5);
//     *
//    **
//   ***
//  ****
// *****

triangle(9);
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
