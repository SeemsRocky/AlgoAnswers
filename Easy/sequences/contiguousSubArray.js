/** 
 * @param {number[]} nums
 * output: maxSum
*/

// time O(n^2) space O(1) b/c only used primitive values
const maxSubArray = function(nums){
  let maxSum = -Infinity;
  for(let i = 0; i < nums.length; i += 1){
    let currSum = 0;
    for(let j = i; j < nums.length; j += 1){
      currSum += nums[j];
      maxSum = maxSum < currSum ? currSum : maxSum;
    }
  }
  return maxSum;
}
// time O(n) space 0(1)
// so reset currsum whenever the curr number is bigger than the curr sum 
const linearMaxSubArray = function(nums){
  let maxSum = -Infinity;
  let currSum = -Infinity;
  for(let val of nums){
    currSum += val;
    if(val > currSum){
      currSum = val;
    }
    if(currSum > maxSum){
      maxSum = currSum;
    }
    if(val>currSum){
      currSum = 0;
    }
  }
  return maxSum;
}