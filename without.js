let without = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      // check whehere there are mached elements on arr1 from arr2
      if (arr1[i] === arr2[y]) {
        // remove item from arr1
        arr1.splice(i, 1);
      }
    }
  }
  return console.log(arr1);
};

// TEST CODE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


without([1, "2", "3"], [1, 2, "3"]) // => ["2"]