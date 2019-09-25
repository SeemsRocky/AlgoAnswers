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