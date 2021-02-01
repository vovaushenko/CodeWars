// https://www.codewars.com/kata/595bbea8a930ac0b91000130

const calculate1RM = (w, r) => {
  if (r == 1) return w;
  if (r == 0) return 0;
  const maxByEpley = Math.round(w * (1 + r / 30));
  const maxByMcGlothin = Math.round((100 * w) / (101.3 - 2.67123 * r));
  const maxByLombardi = Math.round(w * r ** 0.1);
  return Math.max(maxByEpley, maxByMcGlothin, maxByLombardi);
};
