// https://www.codewars.com/kata/57e90bcc97a0592126000064

const seaSick = (x) => {
  let counter = 0;
  let [i, j] = [0, 1];

  while (j < x.length) {
    if (x[i] + x[j] === '~_' || x[i] + x[j] === '_~') counter++;
    i++;
    j++;
  }

  return counter / x.length > 0.2 ? 'Throw Up' : 'No Problem';
};
