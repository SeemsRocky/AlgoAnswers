/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
  const columns = {}
  const rows = {}
  const boxes = {}
  let isValid = true
  function checkConstraint(constraint,constraintIndex,currentNum) {
      if(constraint.hasOwnProperty(constraintIndex)){
          if(constraint[constraintIndex][currentNum]){
              isValid = false    
          }
      } else {
          constraint[constraintIndex] = new Array(9);
      }
      constraint[constraintIndex][currentNum] = currentNum;
  }
  for(let row = 0; row < board.length; row +=1 ){
      for(let col = 0; col < board[row].length; col += 1){
          const currentNum = Number(board[row][col])
          if(currentNum){
              checkConstraint(columns,col,currentNum)
              checkConstraint(rows,row,currentNum)
              checkConstraint(boxes,(Math.floor(row/3)*3 + (Math.floor(col/3))),currentNum)
              if(!isValid){
                  return false
              }
          }
          
      }
  }
  return true;
};