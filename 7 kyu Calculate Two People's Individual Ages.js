// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1

const getAges = (sum, difference) => {
  let minAge = (sum - difference) / 2;
  let maxAge = sum - minAge;
  if (minAge < 0 || maxAge < 0) return null;
  return [minAge, maxAge];
};
