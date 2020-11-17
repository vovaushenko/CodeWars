// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040
const multiplyAll = (arr) => {
  return (num) => {
    return arr.map((el) => el * num);
  };
};

console.log(multiplyAll([1, 2, 3])(2) );
