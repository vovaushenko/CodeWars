// https://www.codewars.com/kata/544a54fd18b8e06d240005c0

const min = (arr, id) => {
  return id === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
};

console.log(min([1, 2, 3, 4, 5], 'index'));
