// https://www.codewars.com/kata/595aa94353e43a8746000120

const findDeletedNumber = (arr, mixArr) => {
  if (arr.length == mixArr.length) return 0;

  for (let num of arr) {
    if (!mixArr.includes(num)) return num;
  }
};

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 2, 5]));
