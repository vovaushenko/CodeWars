// https://www.codewars.com/kata/51b6249c4612257ac0000005

const decoder = (str) => {
  let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (str[0] === "I" && str.length !== 1) {
    nums.I = -1;
    return [...str].reduce((total, num) => total + nums[num], 0);
  }

  return [...str].reduce((total, num) => total + nums[num], 0);
};