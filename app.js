// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca

const removeDuplicateIds = (obj) => {
  let uniqueValues = [...new Set(Object.values(obj).reduce((t, v) => t.concat(v), []))];
  let indexes = Object.keys(obj);
  console.log(uniqueValues);

  let uniqueObj = {};

  for (let i = indexes.length - 1; i >= 0; i--) {
    let index = indexes[i];

    let values = uniqueValues.filter((val) => obj[index].includes(val));
    uniqueValues = uniqueValues.filter((val) => !obj[index].includes(val));
    uniqueObj[index] = values.sort();
  }

  return uniqueObj;
};
console.log(
  removeDuplicateIds({
    432: ['A', 'A', 'B', 'D'],
    53: ['L', 'G', 'B', 'C'],
    236: ['L', 'A', 'X', 'G', 'H', 'X'],
    11: ['P', 'R', 'S', 'D'],
  })
);
