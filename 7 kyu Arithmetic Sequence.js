// /https://www.codewars.com/kata/540f8a19a7d43d24ac001018

const nthterm = (start, id, step) => {
  let count = 0;
  while (count !== id) {
    start += step;
    count++;
  }
  return start;
};
