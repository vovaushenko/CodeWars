// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039

const numbersWithDigitInside = (x, d) => {
  let foundNumbers = [];
  for (let i = 1; i <= x; i++) {
    if ([...(i + '')].includes(d + '')) {
      foundNumbers.push(i);
    }
  }
  if(foundNumbers.length == 0) return [0,0,0]
  const sum = foundNumbers.reduce((a, b) => a + b, 0);
  const product = foundNumbers.reduce((a, b) => a * b, 1);

  return [foundNumbers.length, sum, product];
};