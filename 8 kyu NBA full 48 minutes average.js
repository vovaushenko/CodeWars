// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

const pointsPer48 = (ppg, mpg) => mpg && ppg ? +((48 / mpg) * ppg).toFixed(1) : 0;
