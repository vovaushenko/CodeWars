// https://www.codewars.com/kata/5581a7651185fe13190000ee

const pattern = (n) => {
  let counter = 1;
  let nums = '';
  while (nums.length < n) {
    nums += counter;
    counter++;
    if (counter === 10) {
      counter = 0;
    }
  }

  let resPattern = [];
  for (let i = n - 1; i >= 0; i--) {
    resPattern.push(' '.repeat(i) + nums);
  }

  return resPattern.join('\n');
};

console.log(pattern(3));
