// 867. Transpose Matrix
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

const transpose = (matrix) => {
  const res = [];

  for (let i = 0; i < matrix[0].length; i++) {
    res.push(
      matrix.reduce((acc, row) => {
        return [...acc, ...row.filter((_, id) => id === i)];
      }, [])
    );
  }
  return res;
};
