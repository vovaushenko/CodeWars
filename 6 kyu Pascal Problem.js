// https://www.codewars.com/kata/53cae2709bbf4cb80c000575

const createPascalSubArray = (arr) => {
  let i = 0;
  let j = 1;
  const res = [];
  while (j < arr.length) {
    res.push(arr[i] + arr[j]);
    i++;
    j++;
  }
  res.unshift(arr[0]);
  res.push(arr[arr.length - 1]);

  return res;
};

const pascal = (n) => {
  let res = [[1]];

  while (res.length < n) {
    res.push(createPascalSubArray(res[res.length - 1]));
  }

  return res;
};
