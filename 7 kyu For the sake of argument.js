// https://www.codewars.com/kata/5258b272e6925db09900386a

const numbers = (...nums) => {
  let filtered = nums.filter((a) => typeof a == 'number');
  return nums.length == filtered.length ? true : false;
};