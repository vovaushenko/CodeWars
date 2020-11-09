// https://www.codewars.com/kata/5966847f4025872c7d00015b

const averageString = (str) => {
  if (str.length === 0) {
    return "n/a";
  }
  let nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  str = str.split(" ");
  let sum = 0;
  for (let num of str) {
    sum += nums[num];
  }
  let averageNum = Math.floor(sum / str.length);

  // then make reverse search for key by value
  function getNum(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  return getNum(nums, averageNum) ? getNum(nums, averageNum) : "n/a";
};
