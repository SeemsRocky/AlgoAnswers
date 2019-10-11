/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const a = [];
  for(let i = 1;i<=n;i+=1){
    let str = '';
    if (i%3===0){
        str+='Fizz';
    }
    if (i%5===0){
      str+='Buzz';
    }  
    str = str ? str : i.toString();
    a.push(str);
  }
  return a;
};
console.log(fizzBuzz(15))