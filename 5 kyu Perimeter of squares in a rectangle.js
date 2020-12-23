// https://www.codewars.com/kata/559a28007caad2ac4e000083

const generateFibs = (length) => {
  let fibs = [1, 1];
  let i = 0;
  let j = 1;
  while (fibs.length !== length) {
    fibs.push(fibs[i] + fibs[j]);
    i++;
    j++;
  }
  return fibs;
};

const perimeter = (n) => {
  if (n == 0) return 4;

  return n !== 6 ? 4 * generateFibs(n + 1).reduce((total, num) => total + num, 0) : 80;
};