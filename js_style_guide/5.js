function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page++) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);

// don't use iterators, use higher-order functions instead of loops
// avoid using unary increments and decrements
// use spaces between operands and operators
// use a function expression and not a function declaration
// use 2 spaces for indentation, not 4
// unexpected string concatenation
