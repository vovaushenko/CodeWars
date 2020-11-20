// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

const roundToNext5 = (num) => {
  while (true) {
    if (num % 5 === 0) {
      return num;
    }
    num++;
  }
};