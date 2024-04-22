function objectHasProperty(object, string) {
  let objectKeys = Object.keys(object);
  return objectKeys.includes(string) ? true : false;
}

function incrementProperty(object, string) {
  if (objectHasProperty(object, string)) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }
}

function wordCount(string) {
  let wordCounts = {};

  for (let word of string.split(" ")) {
    incrementProperty(wordCounts, word);
  }

  return wordCounts;
}

console.log(wordCount("box car cat bag box")); // { box: 2, car: 1, cat: 1, bag: 1 }
