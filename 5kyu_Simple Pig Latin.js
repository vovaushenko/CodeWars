// https://www.codewars.com/kata/520b9d2ad5c005041100000f

const pigIt = (str) => {
  let arr = str.split(' ');
  let sol = [];
  // recursive solution
  const pigMaker = (a) => {
    if (a.length === 0) {
      return;
    }
    let temp = '';
    if (a[0].search(/^[.,:!?]/) === -1) {
      for (let i = 1; i < a[0].length; i++) {
        temp += a[0][i];
      }
      temp += a[0][0] + 'ay';
    } else {
      temp += a[0];
    }

    sol.push(temp);

    pigMaker(a.slice(1));
  };

  pigMaker(arr);
  return sol.join(' ');
};
