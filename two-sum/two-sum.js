// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Iterate over array, for each iteration add element and index to object
// Upon adding, check to see if the current value and the target's difference is already stored in the object
// If so, return the current value's index as well as the index of the differece

var twoSum = function(nums, target) {
  let valuesObject = {};
  let indexArray = [];
  let difference = 0;
  for (let i = 0; i < nums.length; i++) {
    valuesObject[nums[i]] = nums.indexOf(nums[i]);
    difference = target - nums[i];
    if (valuesObject.hasOwnProperty(difference)) {
      indexArray.push(valuesObject[nums[i]]);
      indexArray.push(valuesObject[difference]);
      return indexArray;
    }
  }
};

twoSum([2, 7, 11, 5], 9); // should return 0 and 1
