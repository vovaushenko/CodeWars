// https://www.codewars.com/kata/55563df50dda59adf900004d

const validateEAN = (ean) => {
  let eanWithoutLast = ean.slice(0, -1);

  const total = [...eanWithoutLast]
    .map((n, id) => (id % 2 === 0 ? Number(n) : Number(n) * 3))
    .reduce((a, b) => a + b);

  return total % 10 !== 0
    ? Number(ean[ean.length - 1]) === 10 - (total % 10)
    : Number(ean[ean.length - 1]) === 0;
};