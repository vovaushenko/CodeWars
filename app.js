// https://www.codewars.com/kata/5a905c2157c562994900009d

const productArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      j !== i ? (product *= arr[j]) : (product *= 1);
    }
    result.push(product);
  }
  return result;
};

console.log(productArray([3, 2, 3]));
