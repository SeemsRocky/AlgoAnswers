/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const cache = {};
  for(const i in nums){
    if(cache[target-nums[i]]) return [cache[target-nums[i]],i];
    if(cache[nums[i]]===undefined) cache[nums[i]]=i;
  }
};