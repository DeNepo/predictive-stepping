import {
  whenFormDataChanges,
  readString,
  displayString,
} from "../../lib/dom-io/index.js";

// ===== declare program constants =====

const CAT = ` 
   .       .
   |\\_---_/|
  /   o o   \\
  |    U    |
  \\  ._I_.  /
   '-_____-'`;

const NOT_CAT = `
    \\ \\  / /
     \\ \\/ /
      \\  /
      /  \\
     / /\\ \\
    / /  \\ \\`;

// ===== define user interaction =====

whenFormDataChanges("maybe-a-cat", () => {
  debugger;

  // --- read user input ---

  let input = readString("catext");

  // --- detect if the input is a cat or not ---

  let isCat;
  if (input.toLowerCase() === "cat") {
    isCat = true;
  } else {
    isCat = false;
  }

  // --- determine which feedback to display ---

  let feedback;
  if (isCat) {
    feedback = CAT;
  } else {
    feedback = NOT_CAT;
  }

  // --- display the message ---

  displayString("cat-detection", feedback);
});
