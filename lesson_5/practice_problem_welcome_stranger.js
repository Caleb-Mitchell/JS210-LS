function greetings(nameArr, occupationObj) {
  let name = nameArr.join(" ");
  let title = occupationObj.title;
  let occupation = occupationObj.occupation;

  console.log(
    `Hello ${name}! Nice to have a ${title} ${occupation} around.`
  );
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
