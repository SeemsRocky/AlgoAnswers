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