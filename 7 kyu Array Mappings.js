// https://www.codewars.com/kata/56e20642ddeb0f4fac000344

Array.prototype.map = function (func) {
  const result = [];
  for (let el of this) result.push(func(el));
  return result;
};
