// https://www.codewars.com/kata/54f2f335cb9d99e8530008d7

const span = (arr, pred) => {
  let res = [[], []];
  let failed = false;
  for (let i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) failed = true;
    if (!failed) {
      res[0].push(arr[i]);
    } else {
      res[1].push(arr[i]);
    }
  }

  return res;
};
