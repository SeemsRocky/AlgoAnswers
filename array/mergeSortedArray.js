/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */ 
// O(n+m) time and O(1) space?
var merge = function(nums1, m, nums2, n) {
    for(let curr1 = 0, curr2 = 0; curr1 < m;curr1 +=1){
      //swap and increment curr1
      if(nums1[curr1] > nums2[curr2]){
        let temp = nums1[curr1];
        nums1[curr1] = nums2[curr2];
        nums2[curr2] = temp;
      } 
    }
    for(let curr2 = 0; curr2 < n; curr2 += 1){
      nums1[curr2+m] = nums2[curr2];
    }
};
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1,3,nums2,3)
console.log(nums1)