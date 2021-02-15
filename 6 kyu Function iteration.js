// https://www.codewars.com/kata/54b679eaac3d54e6ca0008c9

const createIterator = (func, n) => {
  return function () {
    let initialFunctionVal = func(...arguments);
    for (let i = 0; i < n - 1; i++) initialFunctionVal = func(initialFunctionVal);
    return initialFunctionVal;
  };
};
