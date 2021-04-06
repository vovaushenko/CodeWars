const maxedOut = (arr) => {
  const total = arr.reduce((total, num) => total + num ** 3, 0);
  return total > Number.MAX_SAFE_INTEGER ? "You've pushed me to the max!" : total;
};

console.log(maxedOut([7600, 32300, 66700, 22200, 4554, 323000, 5555]));
