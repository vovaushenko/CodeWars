// https://www.codewars.com/kata/515dfd2f1db09667a0000003

const keysAndValues = (obj) => {
  return [[...Object.keys(obj)], [...Object.values(obj)]];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
