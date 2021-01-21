// https://www.codewars.com/kata/559fed8454b12433ff0000a2

const addAdjecentNumsInArr = (arr) => {
  let res = [];
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    res.push(arr[i] + arr[j]);
    i++;
    j++;
  }

  return res;
};

const sum2total = (arr) => {
  let result;

  const helper = (a) => {
    if (a.length == 1) {
      result = a[0];
      return;
    }

    helper(addAdjecentNumsInArr(a));
  };
  helper(arr);
  return result;
};
