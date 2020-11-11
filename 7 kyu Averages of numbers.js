// https://www.codewars.com/kata/57d2807295497e652b000139

const averages = (arr) => {
  if (arr === null) {
    return [];
  }
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let average = (arr[i] + arr[i + 1]) / 2;
    result.push(average);
  }
  return result;
};
