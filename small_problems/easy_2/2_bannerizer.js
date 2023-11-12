// function drawBorder(lineOfText) {
//   console.log(`+${"-".repeat(lineOfText.length + 2)}+`);
// }
//
// function drawBoxPadding(lineOfText) {
//   console.log(`|${" ".repeat(lineOfText.length + 2)}|`);
// }
//
// function drawTextLine(lineOfText) {
//   console.log(`| ${lineOfText} |`);
// }
//
// function logInBox(lineOfText) {
//   drawBorder(lineOfText);
//   drawBoxPadding(lineOfText);
//   drawTextLine(lineOfText);
//   drawBoxPadding(lineOfText);
//   drawBorder(lineOfText);
// }
//
// logInBox("To boldly go where no one has gone before.");
// logInBox("");

// further exploration
function drawBorder(lineOfText, maxWidth = 0) {
  if (maxWidth) {
    console.log(`+${"-".repeat(maxWidth + 2)}+`);
  } else {
    console.log(`+${"-".repeat(lineOfText.length + 2)}+`);
  }
}

function drawBoxPadding(lineOfText, maxWidth = 0) {
  if (maxWidth) {
    console.log(`|${" ".repeat(maxWidth + 2)}|`);
  } else {
    console.log(`|${" ".repeat(lineOfText.length + 2)}|`);
  }
}

function drawTextLine(lineOfText, maxWidth = 0) {
  if (maxWidth) {
    console.log(`| ${lineOfText.slice(0, maxWidth)} |`);
  } else {
    console.log(`| ${lineOfText} |`);
  }
}

function logInBox(lineOfText, maxWidth = 0) {
  drawBorder(lineOfText, maxWidth);
  drawBoxPadding(lineOfText, maxWidth);
  drawTextLine(lineOfText, maxWidth);
  drawBoxPadding(lineOfText, maxWidth);
  drawBorder(lineOfText, maxWidth);
}

logInBox("To boldly go where no one has gone before.");
logInBox("To boldly go where no one has gone before.", 10);
// logInBox("");
