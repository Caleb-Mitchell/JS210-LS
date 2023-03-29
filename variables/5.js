/*
This program logs `bar` to the console.

On line 1 the variable `foo` is initialized to the value `'bar'`.

On line 3, a new variable is declared with the same name, `foo`, shadowing
the variable from line 1. This is not reassignment, but the declaration of a new
variable, which is scoped to the block.

Once the block ends, the variable is out of scope, so line 6 logs `bar`.
*/
