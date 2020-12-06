// https://www.codewars.com/kata/54e9554c92ad5650fe00022b/train/javascript

const toCurrency = (price) => {
  price = String(price);
  let parts = [];
  let counter = 0;
  let temp = '';
  for (let i = price.length - 1; i >= 0; i--) {
    temp += price[i];
    counter++;
    if (counter === 3 || i == 0) {
      parts.push(temp);
      temp = '';
      counter = 0;
    }
  }
  return parts
    .reverse()
    .map((a) => [...a].reverse().join(''))
    .join(',');
};
