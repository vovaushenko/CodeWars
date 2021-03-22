//www.codewars.com/kata/5d49c93d089c6e000ff8428c
const save = (sizes, hd) => {
  if (sizes.reduce((a, b) => a + b, 0) < hd) return sizes.length;

  let [i, counter, tempSize] = [0, 0, 0];

  while (tempSize < hd) {
    tempSize += sizes[i];
    i++;
    if (tempSize > hd) break;
    counter++;
  }

  return counter;
};
