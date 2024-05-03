// The issue would arise if 0 would be passed as one of the arguments,
// as 0 is a falsey value in JavaScript. It would be better to test if
// any of the arguments were equal to undefined (arg1 === undefined).
