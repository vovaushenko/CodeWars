// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae

const flatten = (arr) => {
  let flat = [];

  const helper = (a) => {
    if (a.length === 0) return;
    if (typeof a[0] === 'object') {
      helper(a[0]);
    } else {
      flat.push(a[0]);
    }
    helper(a.slice(1));
  };

  helper(arr);
  return flat;
};

const locate = (arr, value) => flatten(arr).includes(value);