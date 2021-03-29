const search = (budget, prices) =>
  prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(',');

console.log(search(0, [6, 1, 2, 9, 2]));
