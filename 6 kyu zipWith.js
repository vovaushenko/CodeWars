// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

const zipWith = (fn, a0, a1) => {
  let res = [];
  let minLength = Math.min(a0.length, a1.length);

  for (let i = 0; i < minLength; i++) {
    res.push(fn(a0[i], a1[i]));
  }
  return res;
};
