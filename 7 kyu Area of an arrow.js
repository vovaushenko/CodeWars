// https://www.codewars.com/kata/589478160c0f8a40870000bc/train/javascript

const arrowArea = (a, b) => {
  const d = Math.sqrt(a ** 2 + b ** 2);
  const h = Math.sqrt(d ** 2 - a ** 2) / 2;
  let area = (a * h) / 2;

  return parseFloat(area.toFixed(2));
};
