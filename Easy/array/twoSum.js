/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const cache = {};
  for(const val of nums){
    if(cache.hasOwnProperty(target-val)) return [cache[target-val],val];
    if(!cache.hasOwnProperty(nums[val])) cache[val]=val;
  }
};
console.log(twoSum([1,22,-13,4,3,5,9,-5],6))

const bruteTwoSum = function(nums, target){
  for(let i = 0; i < nums.length; i += 1){
    for(let j = i; j < nums.length; j += 1){
      if(nums[j]+nums[i]===target) return [nums[i],nums[j]] // or [i,j] for indices
    }
  }
}
console.log(bruteTwoSum([22,-13,4,1,3,5,9,-5],6))