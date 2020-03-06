const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
 
  const outpout = "";
  for (const key in obj) {
    console.log(callback(obj[key]))
    if (callback(obj[key])){
      return key; 
    }
  }
}
  
  // EXAMPLE OF GETTING value of star key
//   const outpout = "";
//   for (const key in obj) {
//     console.log(callback(obj[key]))
//     if (callback(obj[key])){
//       console.log(obj[key].stars)
//      // for loop of "the star" object
//       for (const key2 in obj[key]){
//         console.log(obj[key][key2] === 3)
//       }

//       return obj[key]; 
//     }
//     // console.log(array[key])
//   }
// }

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');