
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined ||  matrix.length === 0) {
    return []; 
  } else {

  let count = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        count.push(matrix[i][j]);
      }          
    } else {
      matrix[i].reverse();
      for (let j = 0; j < matrix[i].length; j++) {
        count.push(matrix[i][j]);
      }  
    }    
  }
  return count;
  }
}
