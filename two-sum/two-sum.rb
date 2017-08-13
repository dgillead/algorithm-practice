# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
#
# Iterate over array, for each iteration add element and index to hash
# Upon adding, check to see if the current value and the target's difference is already stored in the hash
# If so, return the current value's index as well as the index of the differece

def two_sum(array, target)
  indexArray = []
  valuesHash = {}
  array.each_with_index do |num, index|
    valuesHash[num] = index
    difference = target - num
    if valuesHash.include?(difference)
      indexArray.push(index)
      indexArray.push(valuesHash[difference])
      return indexArray
    end
  end
end

two_sum([2, 7, 11, 5], 9);
