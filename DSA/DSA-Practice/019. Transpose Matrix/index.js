// ========== Solution-1 ================

function transposeMatrix(matrix) {
  // Write your code here.
  let row = 0;
  let transpose = [];
  while (row < matrix[0].length) {
    transpose[row] = [];
    for(let i = 0; i < matrix.length; i++) {
      transpose[row].push(matrix[i][row]);
    }
    row++;
  }
  return transpose;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;

// ========== Solution-2 ================

function transposeMatrix(matrix) {
  // Write your code here.
  let transpose = [];
  for(let i = 0; i < matrix.length; i++) {
    for( let j = 0; j < matrix[i].length; j++) {
      // check if the row in the new matrix is initialized
      if(!transpose[j]) transpose.push([]);
      transpose[j][i] = matrix[i][j];
    }
  }
  return transpose;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
