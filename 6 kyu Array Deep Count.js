// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

const deepCount = (arr) => {
  let counter = 0;

  let helper = (a) => {
    if (a.length === 0) return;
    if (typeof a[0] !== 'object') {
      counter++;
    } else {
      counter++;
      helper(a[0]);
    }

    helper(a.slice(1));
  };

  helper(arr);
  return counter;
};