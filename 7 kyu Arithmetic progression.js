// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018

const arithmeticSequenceElements = (a, r, n) => {
  let res = [];
  while (res.length < n) {
    res.push(a);
    a += r;
  }
  return res.join(', ');
};
