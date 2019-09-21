/**
 * @param {number} x
 * @return {number}
 * 123 -> 321
 * -321 -> -123
 */
var stringReverse = function(x) {
    // const isNegative = x!==Math.num(x);
    // console.log(isNegative)
    const posX = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    // console.log(posX);
    return x<0 ? -1*posX : posX;
};

var mathReverse = function(x){
  if(x===0) return 0;
  let str = '';
  let num = Math.abs(x)
  while(num>0){
    str += num%10;
    // console.log(str);
    num=Math.floor(num/10);
  }
  console.log(str);
  return x>0 ? parseInt(str) : -1*parseInt(str);
}
console.log(mathReverse(0))
console.log(stringReverse(0));