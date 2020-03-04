let eqArrays = function(arr1, arr2){
  if (arr1 === arr2){
    return false;
  } else {
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false