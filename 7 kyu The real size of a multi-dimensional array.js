// https://www.codewars.com/kata/57f032307b45ef9c8f0001dd

const realSize = (arrays) => {
  let num = 0;
  const values = [];
  const flatten = (arr) => {
    if (!arr.length) return;
    if (!Array.isArray(arr[0])) {
      values.push(arr[0]);
    } else {
      flatten(arr[0]);
    }
    flatten(arr.slice(1));
  };
  flatten(arrays);

  return values.length;
};
