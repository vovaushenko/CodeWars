// https://www.codewars.com/kata/550aea365951383698000727

const split = (arr, prop) => {
  let res = [[], []];

  for (obj of arr) {
    obj[prop] ? res[0].push(obj) : res[1].push(obj);
  }

  return res;
};
