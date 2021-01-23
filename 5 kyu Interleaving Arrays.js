// https://www.codewars.com/kata/523d2e964680d1f749000135

const interleave = (...arrays) => {
  let result = [];

  const helper = (arrs) => {
    if (arrs.reduce((totalLength, a) => totalLength + a.length, 0) === 0) return;

    for (let arr of arrs) {
      result.push(arr[0] || null);
    }
    arrs = arrs.map((a) => a.slice(1));
    helper(arrs);
  };

  helper(arrays);

  return result;
};
