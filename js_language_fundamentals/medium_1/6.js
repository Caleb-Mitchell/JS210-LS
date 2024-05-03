// function debugIt() {
//   const status = 'debugging';
//   function logger() {
//     console.log(status);
//   }
//
//   logger();
// }


function debugIt() {

  function logger() {
    console.log(status); // this has access to variables in the same or
    // surrounding scope, due to JavaScript's lexical scoping rules.
  }

  const status = 'debugging';

  logger();
}

debugIt();


//
