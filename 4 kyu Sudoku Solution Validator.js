// https://www.codewars.com/kata/529bf0e9bdf7657179000008

//@desc: validate if segment is valid eg === 123456789 after sort
const isValidSegment = (segment) => {
  if (typeof segment === 'string') segment = [...segment];
  return segment.sort((a, b) => a - b).join('') === '123456789';
};

const validSolution = (board) => {
  //@desc: initially check all rows if they are valid segments
  for (let row of board) {
    if (!isValidSegment([...row])) return false;
  }

  let isValidSudoku = true;

  //@desc: use recursive helper to check square segments
  const helper = (b) => {
    if (!b[0].length) return;

    // we will generate 3 segments
    let segment1 = '';
    let segment2 = '';
    let segment3 = '';

    //generate segments (first 0 -2 index ,second 2-5, thrid 5-8)
    for (let i = 0; i < b.length; i++) {
      if (i <= 2) segment1 += b[i].slice(0, 3).join('');
      if (i > 2 && i <= 5) segment2 += b[i].slice(0, 3).join('');
      if (i > 5) segment3 += b[i].slice(0, 3).join('');
    }
    // check if segments are valid
    if (!isValidSegment(segment1) || !isValidSegment(segment2) || !isValidSegment(segment3)) {
      isValidSudoku = false;
      return;
    }

    // delete first three elements from the row of our table, since we already checked them
    b = b.map((row) => row.slice(3));

    helper(b);
  };

  helper(board);

  return isValidSudoku;
};
