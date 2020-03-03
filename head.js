const head = function(arr){
  return arr[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  };
};

// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");