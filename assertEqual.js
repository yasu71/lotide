const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// // TEST CODE
// // Comparing non-identical strings
// assertEqual("Lighthouse Labs", "Bootcamp");

// // Comparing identical numbers
// assertEqual(1, 1);

// // Comparing identical strings
// assertEqual("Hello", "Hello");

// // Comparing non-identical numbers
// assertEqual(2, 1);