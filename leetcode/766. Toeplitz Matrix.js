const isToeplitzMatrix = (matrix) => {
  let [i, j] = [0, 1];
  while (j < matrix.length) {
    let first = matrix[i].slice(0, matrix[i].length - 1);
    let second = matrix[j].slice(1);
    if (first.join('') !== second.join('')) return false;
    i++;
    j++;
  }

  return true;
};
