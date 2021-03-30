// https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb

const findMissingNumbers = (arr) => {
  let [smallest, biggest] = [Math.min(...arr), Math.max(...arr)];
  let referrence = Array.from({ length: biggest - smallest + 1 }, (_, id) => smallest + id);

  return referrence.filter((num) => !arr.includes(num));
};

console.log(findMissingNumbers([-3, -2, 1, 5]));
