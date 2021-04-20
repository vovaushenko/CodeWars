// 1822. Sign of the Product of an Array

const arraySign = (nums: number[]): number => {
  const product = nums.reduce((prod, num) => prod * num, 1);

  if (!product) return 0;

  return product > 0 ? 1 : -1;
};
