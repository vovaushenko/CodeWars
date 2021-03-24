// 1582. Special Positions in a Binary Matrix

// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

const numSpecial = (mat) => {
  let specialPositions = 0;
  for (let row of mat) {
    const countOfOnesInRow = row.filter((num) => num).length;
    if (!countOfOnesInRow || countOfOnesInRow > 1) {
      continue;
    }

    let index = row.indexOf(1);

    const countOfOnesInColumn = mat.reduce((count, row) => count + row[index], 0);

    if (countOfOnesInColumn === 1) specialPositions++;
  }
  console.log(specialPositions);
  return specialPositions;
};
