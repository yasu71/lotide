const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKeyByValue = function(genre, tvTitle) {
  let result = "";
  for(let key in genre){
    // console.log("key", key);
    // key => sci_fi, comedy, drama
    // genre[key] => The Expanse, Brooklyn Nine-Nine, The Wire    
    if (genre[key] === tvTitle){
      return key;
    } 
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);