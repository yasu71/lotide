// TEST/ASSERTION FUNCTIONS
let eqArrays = function(arr1, arr2){
  //is it an arr
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// MIDDLE FUNCTION
const middle = function(array) {

  let middleElement = [];

  // return if array has less than 2 elements
  if (array.length < 3) {
    return middleElement;
  }

  // get the position of element that needs to be removed
  let removeNum = array.length / 2;
  
  // chech whether array has even/odd number of elements
  if (array.length % 2 !== 0) {
    middleElement.push(array[Math.floor(removeNum)]);
  } else {
    middleElement.push(array[removeNum - 1], array[removeNum]);
  }
  return middleElement;
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
