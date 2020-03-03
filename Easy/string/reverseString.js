/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// o(n/2)? thats still O(n)
const reverseString = function(s) {
  const a = s.split('');
  let left = 0;
  let right = s.length-1;
  while(left<right){
    [a[left],a[right]] = [a[right],a[left]];
    left++;
    right--;
  }
  return a.join('');
}
console.log(reverseString('hello'))