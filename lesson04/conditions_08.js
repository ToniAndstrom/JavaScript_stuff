/*
Compose a function called pluralize that:

Accepts two arguments: a noun and a number.
Returns a string combining the number and the appropriately pluralized form of the noun, such as '5 cats' or '1 dog'.

 */

function pluralize(x, y) {
  if (y == 1) {
    return y + " " + x;
  } else {
    return y + " " + (x += "s");
  }
}

// Sample usage - do not modify
console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("dog", 1));
console.log("I have " + pluralize("parrot", 7));
