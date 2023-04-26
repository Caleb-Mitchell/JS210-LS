/*

[1, 4, 3]

Because when dealing with objects, variables in Javascript store a pointer
to the object, instead of the objet itself. Therefore, both `array1` and
`array2` both point to the same object in memory.

Becuse collection assignment mutates the referenced object, this is reflected
by `array2` as well as `array1`.

*/
