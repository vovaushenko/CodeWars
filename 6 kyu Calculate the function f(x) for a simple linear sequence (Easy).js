// https://www.codewars.com/kata/5476f4ca03810c0fc0000098/train/javascript

const getFunction = (sequence) => {
  let [i, j] = [0, 1];
  let steps = [];

  while (j < sequence.length) {
    steps.push(sequence[j] - sequence[i]);
    i++;
    j++;
  }
  if ([...new Set(steps)].length !== 1) return 'Non-linear sequence';
  if (!steps[0]) return `f(x) = ${sequence[0]}`;

  return `f(x) = ${steps[0] === 1 ? '' : steps[0]}x${
    sequence[0] ? ` ${sequence[0] > 0 ? '+' : '-'} ${Math.abs(sequence[0])}` : ''
  }`;
};
