// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

const validate = (num) => {
  let arr = String(num).split('').map(Number);
 
  let sum;
  
  if (arr.length % 2 === 0) {
    sum = arr
      .map((num, id) =>
        id % 2 !== 0 
          ? num 
          : num * 2 > 9 
            ? num * 2 - 9 
            : num * 2
      )
      .reduce((a, b) => a + b);

    return sum % 10 === 0 ? true : false;
  } else {
    sum = arr
      .map((num, id) =>
        id % 2 === 0 
          ? num 
          : num * 2 > 9 
            ? num * 2 - 9 
            : num * 2
      )
      .reduce((a, b) => a + b);
    return sum % 10 === 0 ? true : false;
  }
};
