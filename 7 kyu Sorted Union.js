// https://www.codewars.com/kata/5729c30961cecadc4f001878

const uniteUnique = (...arrays) => {
  const seen = {};
  const unique = [];
  for (let arr of arrays) {
    for (let num of arr) {
      if (!seen[num]) unique.push(num);
      seen[num] = true;
    }
  }
  return unique;
};
