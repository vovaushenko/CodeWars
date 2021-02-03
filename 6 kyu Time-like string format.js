// https://www.codewars.com/kata/51e000d070fe4414000003f0

const solution = (num) => {
  let arr = [...(num + '')];
  if (arr.length < 3 || arr.length > 4) throw new Error('Length is invalid');

  arr.splice(~~arr.length / 2, 0, ':');
  return arr.join('');
};
