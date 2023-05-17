// outer
// inner
// outer

// the output from line 8 is 'outer', because at that time
// variable `a` is assigned to 'outer' in the outer scope

// when `testscope` is invoked on line 9, within the function definition
// a new local variable `a` is declared and assigned to 'inner'. This is
// then output due to line 5.

// the output from line 10 is then 'outer', as local variable `a` in the outer
// scope still refers to 'outer'.
