// https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/javascript

const solve = (n) => {
  const fiboStrings = ['0', '01'];
  if (n <= 1) return fiboStrings[n];

  while (fiboStrings.length <= n) {
    fiboStrings.push(fiboStrings[fiboStrings.length - 1] + fiboStrings[fiboStrings.length - 2]);
  }

  return fiboStrings[fiboStrings.length - 1];
};
