// https://www.codewars.com/kata/529872bdd0f550a06b00026e

const productOfFive = (str) => [...str].reduce((total, num) => total * +num, 1);

const greatestProduct = (str) => {
  let maxProduct = 1;

  const helper = (s) => {
    if (s.length < 5) return;
    maxProduct = Math.max(maxProduct, productOfFive(s.slice(0, 5)));

    helper(s.substring(1));
  };
  helper(str);
  return maxProduct;
};
