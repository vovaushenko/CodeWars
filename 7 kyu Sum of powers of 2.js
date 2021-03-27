const powers = (n) => {
  const cache = [1];

  let power = 1;
  let tempNum = 2;
  while (tempNum <= n) {
    tempNum = 2 ** power;
    if (tempNum > n) break;
    cache.push(tempNum);
    power++;
  }

  const members = [];

  for (let i = cache.length - 1; i >= 0; i--) {
    if (n - cache[i] >= 0) {
      n -= cache[i];
      members.unshift(cache[i]);
    }
    if (!n) break;
  }

  return members;
};
