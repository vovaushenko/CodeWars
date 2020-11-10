// https://www.codewars.com/kata/5a4138acf28b82aa43000117

const adjacentElementsProduct = (arr) => {
  let maxProduct = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let product = arr[i] * arr[i + 1];
    console.log(product);
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct;
};
