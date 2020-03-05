const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE08 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(letters) {
  let result = {}; 
  letters = letters.split(' ').join('');

  // console.log(letters); <- check what letters is printed
  for (let letter of letters){
    //check if the current letter is in result obj
    //add +1
    if(result[letter]){
      result[letter] += 1;
    }     
    //else add the key and value to 1

    else {
      result[letter] = 1;
    }

    // == Another Way to solve ==
    // result[letter] = result[letter] || 0;
    // result[letter] += 1
  }
  return result
};

console.log(countLetters("lighthouse in the house"));