/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n) time O(n) space 
const containsDuplicate = function(nums) {
    let cache = {};
    for(const num of nums){
      cache[num] = cache[num] === undefined ? 1 : cache[num]+1;
      if(cache[num]>1) return true; 
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,12,22,32]));