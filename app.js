// https://www.codewars.com/kata/51edd51599a189fe7f000015

const solution = (a1, a2) => {
  let total = 0;

  for (let i = 0; i < a1.length; i++) {
    total += Math.abs(a1[i] - a2[i]) ** 2;
  }
  return total / a1.length;
};

solution([10, 20, 10, 2], [10, 25, 5, -2]);
