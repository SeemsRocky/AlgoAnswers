/**
 * Given an array nums of n integers where n > 1,  
 * return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * @param {number[]} nums
 * @return {number[]}
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 */

var bruteProductExceptSelf = function(nums) {
  const productArray = []
  for(let i = 0; i < nums.length; i += 1){
    let product = 1;
    for(let j = 0; j < nums.length; j +=1){
      if(j!==i){
        product *= nums[j];
      }
    }
    productArray.push(product);
  }
  return productArray;
};
// O(n) but with divison
var divisionProductExceptSelf = function(nums){
  const total = nums.reduce((acc,curr) => acc*curr);
  return nums.map(curr => curr === 0 ? total : total/curr)
}
// no division and in O(N) time
// 
// var noDivisionProductExceptSelf = function(nums){

// }
console.time('bruteForce');
console.log(bruteProductExceptSelf([1,2,3,4]));
console.timeEnd('bruteForce');
console.time('division')
console.log(divisionProductExceptSelf([1,2,3,4]))
console.timeEnd('division')