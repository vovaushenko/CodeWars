const newAvg = (arr, goal) => {
  const currentTotal = arr.reduce((a, b) => a + b, 0);
  const desiredTotal = goal * (arr.length + 1);
  const requiredDonation = +Math.round(desiredTotal - currentTotal).toFixed(0);
  if (requiredDonation < 0) {
    throw new Error('🤑');
  }

  return requiredDonation;
};
