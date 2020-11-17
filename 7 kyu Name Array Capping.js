// https://www.codewars.com/kata/5356ad2cbb858025d800111d

const capMe = (arr) => {
  arr = arr.map(el => el.toLowerCase())
  let result = [];
  // lets do this recursively
  const capitalizer = (a) => {
    if (a.length === 0) {
      return;
    }
    
    let capitalized = '';
    for (let i = 0; i < a[0].length; i++) {
      if (i == 0) {
        capitalized += a[0][i].toUpperCase();
      } else {
        capitalized += a[0][i];
      }
    }
    result.push(capitalized);
    capitalizer(a.slice(1));
  };

  capitalizer(arr);
  return result;
};