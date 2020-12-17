// https://www.codewars.com/kata/544d114f84e41094a9000439

const powerOf4 = (num) => {
  let start = 4;
  while (start < num) {
    start *= 4;
  }
  return start == num ? true : false;
};
