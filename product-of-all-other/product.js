function productOfOthers(nums) {
  let productOfAllExceptIndex = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    productOfAllExceptIndex[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    productOfAllExceptIndex[i] *= product;
    product *= nums[i];
  }
  return productOfAllExceptIndex;
}

productOfOthers([1, 7, 3, 4]); // should return [84, 12, 28, 21]
