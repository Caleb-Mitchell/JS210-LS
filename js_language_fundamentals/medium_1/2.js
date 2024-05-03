let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// no, this will also log 0, even though though it is not a multiple of 3,
// because in JS 0 / 3 evaluates to 0

// it also doesn't increment by 1 and gets stuck in an infinite loop
// in the if condition
