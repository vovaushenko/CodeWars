// https://www.codewars.com/kata/57ced2c1c6fdc22123000316

const numObj = (s) => {
  let res = [];
  for (let num of s) {
    let obj = {};
    obj[num] = String.fromCharCode(num);
    res.push(obj);
  }
  return res;
};
