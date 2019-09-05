/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) time O(1) space
// remove dupes in place
const removeDuplicates = function(nums) {
  let currI = 0;

  for(let i =0;i<nums.length;i+=1){
    if(nums[i]>nums[currI]){
      nums[currI+1] = nums[i];
      currI += 1;
    }
  }
  return currI+1;
};
const arr = [0,0,1,1,1,2,2,3,3,4];
const answer = removeDuplicates(arr)
console.log(arr,answer);
