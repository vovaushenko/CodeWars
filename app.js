// https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

const doneOrNot = (board) => {
  if (!checkRegion(board)) return 'Try again!';
  if (!checkColumns(board)) return 'Try again!';
  if (!checkRows(board)) return 'Try again!';

  return 'Finished!';
};

function checkRows(board) {
  let boardForTest = [...board];
  const REFERRENCE = '123456789';
  for (let row of boardForTest) {
    if (row.sort((a, b) => a - b).join('') !== REFERRENCE) return false;
  }
  return true;
}

function checkColumns(originalBoard) {
  let boardForTest = [...originalBoard];
  let newBoard = Array.from({ length: 9 }, () => []);

  for (let i = 0; i < boardForTest.length; i++) {
    for (let j = 0; j < boardForTest[i].length; j++) {
      newBoard[j].push(boardForTest[i][j]);
    }
  }

  return checkRows(newBoard);
}

function checkRegion(board) {
  let boardForTest = [...board];
  let lineOne = [[], [], []];
  let firstCouter = 0;
  let position = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < boardForTest[i].length; j++) {
      firstCouter++;
      if (position == 3) position = 0;
      lineOne[position].push(boardForTest[i][j]);

      if (firstCouter === 3) {
        position++;
        firstCouter = 0;
      }
    }
  }
  const REFERRENCE = '123456789';

  for (let region of lineOne) {
    if (region.sort((a, b) => a - b).join('') !== REFERRENCE) return false;
  }
  return true;
}

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
