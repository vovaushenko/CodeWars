const search = (budget, prices) =>
  prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(',');
