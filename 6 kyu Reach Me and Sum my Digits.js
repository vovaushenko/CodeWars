// https://www.codewars.com/kata/55ffb44050558fdb200000a4

const sumDigNthTerm = (initval, patternl, nthterm) => {
  const nums = [];

  let currentNum = initval;
  let counter = 0;
  let id = 0;

  while (counter < nthterm) {
    if (id > patternl.length - 1) id = 0;
    nums.push(currentNum);

    currentNum += patternl[id];
    counter++;
    id++;
  }
  console.log(nums);
  const lastNum = nums[nums.length - 1];

  return [...(lastNum + '')].reduce((total, digit) => total + Number(digit), 0);
};