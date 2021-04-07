// https://www.codewars.com/kata/56aea73c2283945da300004b

const generateSubarr = () => {
  const chars = 'ABCD';
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push(chars[~~(Math.random() * 4)]);
  }

  if (!res.includes('A') || !res.includes('B') || !res.includes('C') || !res.includes('D')) {
    return generateSubarr();
  } else {
    return res;
  }
};

const array10 = () => Array.from({ length: 10 }, () => generateSubarr());
