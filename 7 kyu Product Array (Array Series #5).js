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
