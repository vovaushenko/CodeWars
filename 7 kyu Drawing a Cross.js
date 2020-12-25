const drawACross = (n) => {
  if (n < 3) return 'Not possible to draw cross for grids less than 3x3!';
  if (n % 2 == 0) return 'Centered cross not possible!';

  let cross = '';
  for (let i = 0; i < n; i++) {
    cross += drawLine(n, i) + '\n';
  }
  return cross.trim();
};

function drawLine(len, position) {
  let line = Array.from({ length: len }, (_, id) => {
    if (id === position) {
      return 'x';
    } else if (id === len - position - 1) {
      return 'x';
    } else {
      return ' ';
    }
  });
  return line.join('');
}
