

function indexOf(firstString, secondString) {
  // create all substrings, as nested arrays, where second element is the
  // index that the substring starts at

  // filter for the first element equal to the second

  // return the index of that subarray

  let subStrings = [];

  let outerChars = [...firstString];
  for (let outerIdx = 0; outerIdx < outerChars.length; outerIdx++) {
    console.log(outerChars[outerIdx])
  };

}

indexOf('Some strings', 's');                      // 5
