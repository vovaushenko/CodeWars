const maxRot = (n) => {
  let digits = [...(n + '')];
  let index = 0;
  let swappedDigit;
  let maxRotatedNum = n;

  while (index < digits.length - 1) {
    swappedDigit = digits.splice(index, 1);
    digits.push(swappedDigit[0]);
    maxRotatedNum = Math.max(maxRotatedNum, +digits.join(''));
    index++;
  }

  return maxRotatedNum;
};
