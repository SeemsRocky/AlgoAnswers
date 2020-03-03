/**
 * @param {string} s
 * @return {number}
 */
//brute force
// 'abaadcece'
// time O(n)
// space O(n)

var cacheFirstUniqChar = function(s) {
  const uniq = {};
  for(let i = 0; i < s.length; i += 1){
    uniq[s[i]] = uniq.hasOwnProperty([s[i]]) ? -1 : i;
  }
  for(let key of Object.keys(uniq)){
    if(uniq[key]!==-1) return uniq[key];
  }
  return -1;
};
// time O(n^2) space O(1) 
var bruteFirstUniqChar = function(s){
  for(let i = 0 ; i < s.length; i += 1){
    let uniq = true;
    for(let j = 0; j < s.length; j += 1){
      if(s[i]===s[j] && i!==j){
        uniq = false;
      }
    }
    if(uniq) return i;
  }
  return -1;
}
console.log(cacheFirstUniqChar('aaaaabbbbbbbddddeefghgh'));
console.log(bruteFirstUniqChar('aaaaabbbbbbbddddeefghgh'));