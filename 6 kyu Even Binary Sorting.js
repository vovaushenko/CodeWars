// https://www.codewars.com/kata/582bbdbcc190132e3e0001f3

const convertToDec = (bin) => parseInt(bin, 2);

const evenBinary = (str) => {
  const bins = str.split(' ');

  const sortedEvenNums = bins
    .filter((n) => convertToDec(n) % 2 === 0)
    .sort((a, b) => convertToDec(a) - convertToDec(b));

  let sortedRes = [];
  let curr = 0;

  for (let digit of bins) {
    if (!sortedEvenNums.includes(digit)) {
      sortedRes.push(digit);
    } else {
      sortedRes.push(sortedEvenNums[curr]);
      curr++;
    }
  }
  return sortedRes.join(' ');
};
