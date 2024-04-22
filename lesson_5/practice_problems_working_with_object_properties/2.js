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

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, "susie"); // 5
console.log(wins); // { steve: 3, susie: 5 }
incrementProperty(wins, "lucy"); // 1
console.log(wins); // { steve: 3, susie: 5, lucy: 1 }
