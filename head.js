const head = function(array1){
  console.log(array1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  };
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

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");