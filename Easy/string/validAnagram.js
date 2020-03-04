var isAnagram = function(s, t) {
  if(s.length!==t.length) return false;
  // let i = 0;
  let sDict={};
  let tDict={};
  for(let i = 0; i < s.length; i += 1){
    if(s[i]) sDict[s[i]] = sDict.hasOwnProperty(s[i]) ? sDict[s[i]]+1 : 1;
    if(t[i]) tDict[t[i]] = tDict.hasOwnProperty(t[i]) ? tDict[t[i]]+1 : 1;
    // i+=1;
  }
  for(const key of Object.keys(sDict)){
    if(sDict[key]!==tDict[key]){
      return false;
    }
  }
  return true;
};
 