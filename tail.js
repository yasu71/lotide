const tail = function(arr) {
  return arr.slice(1);
};

// console.log(tail());

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");

// Comparing identical numbers
assertEqual(1, 1);

// Comparing identical strings
assertEqual("Yasu", "Yasu");

// Comparing non-identical numbers
assertEqual(2, 1);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);