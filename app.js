// https://www.codewars.com/kata/529bf0e9bdf7657179000008

const isValidSegment = (segment) => {
  if (typeof segment === 'string') segment = [...segment];
  return segment.sort((a, b) => a - b).join('') === '123456789';
};

const validSolution = (board) => {
  for (let row of board) {
    if (!isValidSegment([...row])) return false;
  }

  let isValidSudoku = true;

  const helper = (b) => {
    if (!b[0].length) return;
    let segment1 = '';
    let segment2 = '';
    let segment3 = '';
    for (let i = 0; i < b.length; i++) {
      if (i <= 2) segment1 += b[i].slice(0, 3).join('');
      if (i > 2 && i <= 5) segment2 += b[i].slice(0, 3).join('');
      if (i > 5) segment3 += b[i].slice(0, 3).join('');
    }

    if (!isValidSegment(segment1) || !isValidSegment(segment2) || !isValidSegment(segment3)) {
      isValidSudoku = false;
      return;
    }

    b = b.map((row) => row.slice(3));

    helper(b);
  };

  helper(board);

  return isValidSudoku;
};

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]);
