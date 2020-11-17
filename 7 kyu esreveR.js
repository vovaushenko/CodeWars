// https://www.codewars.com/kata/5413759479ba273f8100003d

const reverse = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};
