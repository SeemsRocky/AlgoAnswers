/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for(let i = 0, lastNonZero = 0; i < nums.length; i +=1){
      if(nums[i]!==0){
          [nums[lastNonZero],nums[i]] = [nums[i],nums[lastNonZero]]
          lastNonZero += 1
      }
  }
};