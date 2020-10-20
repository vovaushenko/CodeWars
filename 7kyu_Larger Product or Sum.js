//https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02
function sumOrProduct(array, n) {
  //firstly we will sort an array
  const sortedArray = array.sort((a, b) => a - b);

  //lets find the sum of n-highest elements
  let sumOfHighest = 0;
  for (let i = sortedArray.length - 1; i >= sortedArray.length - n; i--) {
    sumOfHighest += sortedArray[i];
  }
  //lets find the product of n-lowest elements
  let productOfLowest = 1;
  for (let j = 0; j < n; j++) {
    productOfLowest *= sortedArray[j];
  }

  //compare and return

  if (sumOfHighest === productOfLowest) return 'same';
  return sumOfHighest > productOfLowest ? 'sum' : 'product';
}
