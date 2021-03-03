const solution = (arr) => {
  let res = [];

  let tempRange = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      if (!tempRange.length || tempRange.length === 2) {
        res.push(arr[i]);
        if (tempRange === 2) res.push(tempRange);
      }
      tempRange.length = 0;
    } else {
      tempRange.push(arr[i]);
    }
  }
  console.log(res);
};

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
