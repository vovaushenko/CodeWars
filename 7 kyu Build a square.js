// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(integer) {
  // firstly generate a row
  let solution = '';
  let row = '';
  for (let i = 0; i < integer; i++) {
    row += '+';
  }
  // then columns
  for (let j = 0; j < integer; j++) {
    j !== integer - 1 ? (solution += row + '\n') : (solution += row);
  }
  return solution;
}
