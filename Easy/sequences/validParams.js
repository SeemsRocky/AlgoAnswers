/**
 * @param {string} s
 * @return {boolean}
 */
// O(n) time O(n) space
const dict = {
  '}' : '{',
  ']' : '[',
  ')' : '(',
}
var stackIsValid = function(s) {
    const stack = [];
    let i = 0;
    while(i < s.length){
      if(s[i]=== '{' || s[i]==='(' || s[i]==='[') stack.push(s[i]);
      else {
        let top = stack.pop();
        if(dict[s[i]]!== top) return false;
      }
      i += 1;
    }
    return stack.length ? false : true;
};
console.log(stackIsValid(""));
console.log(stackIsValid("()"));
console.log(stackIsValid("{}[]()"));
console.log(stackIsValid("([)]"));
console.log(stackIsValid("{[]}"));
// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true