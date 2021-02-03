// https://www.codewars.com/kata/51e000d070fe4414000003f0

// @step 1 -> num to array
// @step 2 -> work with exceptions (length < 3 length > 4)
//@ step 3 ->
const solution = (num) => {
  let arr = [...(num + '')];
  if (arr.length < 3 || arr.length > 4) throw new Error('Length is invalid');

  arr.splice(~~arr.length / 2, 0, ':');
  return arr.join('');
};

const solution = (num) => console.log(solution(3314));
