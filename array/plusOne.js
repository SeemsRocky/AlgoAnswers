/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1
  for(let i = digits.length - 1; carry===1 && i >= 0; i -= 1){
      if(digits[i]===9){
          carry = 1;
          digits[i] = 0;
      } else {
          carry = 0
          digits[i] += 1
      }
  }
  if(carry) digits.unshift(1)
  return digits
};