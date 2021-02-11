// https://www.codewars.com/kata/5596700a386158e3aa000011

const BinaryPyramid = (n, m) => {
  let res = 0;

  for (let i = n; i <= m; i++) {
    res += +i.toString(2);
  }
  return res.toString(2);
};
