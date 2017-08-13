// For each element in the array
// Multiply every other number together except for the number at the current index
// Push each value onto an array that's not the current value
// Multiply all values contained in that array together and push onto return array
// Move on to next value until end of array is reached

// re-factor to reduce complexity

function productOfOthers(nums) {
  let validNums = [];
  let productsArray = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] !== nums[i]) {
        validNums.push(nums[k]);
      }
    }
    for (let j = 0; j < validNums.length; j++) {
      product *= validNums[j];
    }
    productsArray.push(product);
    validNums = [];
    product = 1;
  }
  console.log(productsArray);
}

productOfOthers([1, 7, 0, 4]); // should return [84, 12, 28, 21]
