// https://www.codewars.com/kata/5784c89be5553370e000061b

const maxProduct = (arr) => {
  const largest = Math.max(...arr);
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num !== largest) {
      secondLargest = Math.max(num, secondLargest);
    }
  }

  return largest * secondLargest;
};
