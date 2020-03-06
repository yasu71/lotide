const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// };

let eqArrays = function(arr1, arr2){
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

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);

const results2 = map(words, word => word[1]);
assertArraysEqual(results2, ['r','o','o','a','o']);

const results3 = map(words, word => word[2]);
assertArraysEqual(results3, ['o','n','','j','m']);
