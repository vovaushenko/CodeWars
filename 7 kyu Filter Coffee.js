//www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript

https: const search = (budget, prices) =>
  prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(',');
