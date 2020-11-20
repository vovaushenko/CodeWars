// https://www.codewars.com/kata/57a6633153ba33189e000074

const orderedCount = (str) => {
  let result = [];
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (!result.includes(str[i])) {
      result.push(str[i], count);
    }
  }
  let k = 0,
    l = 1;
  while (l < result.length) {
    res.push([result[k], result[l]]);

    k = k + 2;
    l = l + 2;
  }
  return res;
};
