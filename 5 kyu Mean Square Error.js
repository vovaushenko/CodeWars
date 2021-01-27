const solution = (a1, a2) => {
  let total = 0;

  for (let i = 0; i < a1.length; i++) {
    total += Math.abs(a1[i] - a2[i]) ** 2;
  }
  return total / a1.length;
};
