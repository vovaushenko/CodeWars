// https://www.codewars.com/kata/5610a8eeb9a84d624b000005

Array.prototype.sortReloaded = function (param = 'asc') {
  const validParams = ['asc', 'desc'];
  if (!validParams.includes(param)) return false;

  return param === 'asc' ? [...this].sort((a, b) => a - b) : [...this].sort((a, b) => b - a);
};
