let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  // check whether object1 and object2 has the same length of elements
  if (object1Keys.length === object2Keys.length){
    // loop object1
    for (let key in object1){
      // check whether keys are array or not 
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // check the length of two arrays are the same
        if (object1[key].length !== object2[key].length) {
          return false;
        // check whether each elements are the same
        } else {
          eqArrays(object1[key], object2[key]);
          // for (let i = 0; i < object1[key].length; i++){
          //   if (object1[key][i] !== object2[key][i]){
          //     return false;
          //   } else {
          //     true;
          //   }
          // }
        }
      // check object1[key] and object2[key] keys have the same
      } else {        
        if(object1[key] === object2[key]){
          true;
        } else {
          return false;
        }
      }
    } 
  } else {
    return false;
  }
  return true;
};


// === senario 1 ===

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false); // => false


// == senario 2 ==
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false); // => false
