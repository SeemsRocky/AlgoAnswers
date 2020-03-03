/**
 * @param {number} x
 * @return {number}
 * 123 -> 321
 * -321 -> -123
 */
//O(n) time O(1) space
var stringReverse = function(x) {
    const posX = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    return x<0 ? -1*posX : posX;
};
// O(n) time o(1)space
var mathReverse = function(x){
  if(x===0) return 0;
  let str = '';
  let num = Math.abs(x)
  while(num>0){
    str += num%10;
    num=Math.floor(num/10);
  }
  return x>0 ? parseInt(str) : -1*parseInt(str);
}
console.log(mathReverse(0))
console.log(stringReverse(0));