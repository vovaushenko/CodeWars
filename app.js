// https://www.codewars.com/kata/5aee86c5783bb432cd000018

const hydrate = (s) => {
  const total = s
    .replace(/\D+/g, '')
    .split('')
    .reduce((a, b) => a + parseInt(b), 0);
  return total !== 1 ? `${total} glasses of water` : '1 glass of water';
};

console.log(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'));
