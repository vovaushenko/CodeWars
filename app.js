const getAges = (sum, difference) => {
  let minAge = (sum - difference) / 2;
  let maxAge = sum - minAge;
  if (minAge < 0 || maxAge < 0) return null;
  return [minAge, maxAge];
};
sum < 0 || difference < 0 ? null : [(sum - difference) / 2 + difference, (sum - difference) / 2];
