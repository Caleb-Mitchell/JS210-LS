function allMatches(arrayOfStrings, regex) {
  // return regex.match(arrayOfStrings)
  return arrayOfStrings.filter((word) => regex.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
