// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

const explode = (x) => {
  const [first, second] = x;
  if (typeof first === 'string' && typeof second === 'string') return 'Void';
  const count = x.filter((n) => n * 1).reduce((a, b) => a + b);

  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(x);
  }
  return res;
};
