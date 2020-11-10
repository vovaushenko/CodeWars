// https://www.codewars.com/kata/5813d19765d81c592200001a

const dontGiveMeFive = (start, end) => {
  // firstly we will generate array without fives
  let arr = [];

  for (let i = start; i <= end; i++) {
    if (String(i).indexOf('5') === -1) {
      arr.push(i);
    }
  }

  return arr.length;
};
