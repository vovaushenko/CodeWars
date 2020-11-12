// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

const evenNumbers = (arr, num) => {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0 && result.length < num) {
      result.push(arr[i]);
    }
  }
  return result.reverse();
};
