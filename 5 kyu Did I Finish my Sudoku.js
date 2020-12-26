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
