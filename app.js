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

numSpecial([
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
]);
