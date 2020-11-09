// https://www.codewars.com/kata/550e9fd127c656709400024d

const cubeSum = (n1, n2) => {
  if (n1 < n2) {
    small = n1;
    big = n2;
  } else {
    small = n2;
    big = n1;
  }

  let sum = 0;
  for (let i = small + 1; i <= big; i++) {
    sum += i ** 3;
  }

  return sum;
};
