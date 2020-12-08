// https://www.codewars.com/kata/5239f06d20eeab9deb00049b

const fibonacci = (limit) => {
  if (limit <= 0) return [];
  let fibs = [0, 1];
  let i = 0,
    j = 1;

  while (fibs.length < limit) {
    fibs.push(fibs[i] + fibs[j]);
    i++;
    j++;
  }

  return fibs;
};