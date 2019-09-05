/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const cache = {};
  for(const num of nums){
    cache[num] = cache[num]===undefined ? [target-num,false] : [target-num,true];
  }
};