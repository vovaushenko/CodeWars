// https://www.codewars.com/kata/5ff22b6e833a9300180bb953

const differences = (arr) => {
  if (arr.length === 1) return arr[0];
  let res = [];

  const helper = (a) => {
    if (a.length === 1) return;
    let tempArr = [];
    let i = 0;
    let j = 1;

    while (j < a.length) {
      tempArr.push(Math.abs(a[i] - a[j]));
      i++;
      j++;
    }
    res = tempArr;

    helper(tempArr);
  };

  helper(arr);
  return res[0];
};
