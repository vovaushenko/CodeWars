// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

const divCon = (x) => {
  const numsSum = x.filter((a) => typeof a === 'number').reduce((a, b) => a + b, 0);
  const stringsSum = x.filter((a) => typeof a === 'string').reduce((a, b) => a + parseInt(b), 0);
  return numsSum - stringsSum;
};