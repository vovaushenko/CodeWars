const exchangeWith = (a, b) => {
  let temp = [...a];
  a.length = 0;
  for (let i = b.length - 1; i >= 0; i--) a.push(b[i]);
  b.length = 0;
  for (let j = temp.length - 1; j >= 0; j--) b.push(temp[j]);
};
