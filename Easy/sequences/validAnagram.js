/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(2n) time complexity O(2n) space complexity
// var isAnagram = function(s, t) {
//     if(s.length!==t.length) return false;
//     let i = 0;
//     let sDict={};
//     let tDict={};
//     while(i < s.length || i < t.length){
//       if(s[i]) sDict[s[i]] = sDict.hasOwnProperty(s[i]) ? sDict[s[i]]+1 : 1;
//       if(t[i]) tDict[t[i]] = tDict.hasOwnProperty(t[i]) ? tDict[t[i]]+1 : 1;
//       i+=1;
//     }
//     for(const key of Object.keys(sDict)){
//       if(sDict[key]!==tDict[key]){
//         return false;
//       }
//     }
//     return true;
// };

// O(nlogn) time O(1) space
var isAnagram = function(s,t){
  return s.split('').sort().join('')===t.split('').sort().join('');
}

console.log('hi');
console.log(isAnagram('staral', 'astral'));