/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let rotateLen = k % nums.length
  const firstHalf = nums.splice(nums.length-rotateLen,rotateLen)
  nums.unshift(...firstHalf)
};