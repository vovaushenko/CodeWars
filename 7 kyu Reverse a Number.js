// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

function reverseNumber(n) {
  if (n === 0) {
    return 0;
  }
  let solution = '';

  const reverser = (num) => {
    if (num.length === 0) {
      return;
    }
    if (num[num.length - 1] !== '0' || num[num.length - 1] === '-') {
      solution += num[num.length - 1];
    }
    reverser(num.slice(0, -1));
  };
  reverser(String(n));
  return n < 0 ? parseInt(solution) * -1 : parseInt(solution);
}
