Array.prototype.sortReloaded = function (param = 'asc') {
  const validParams = ['asc', 'desc'];
  if (!validParams.includes(param)) return false;

  return param === 'asc' ? [...this].sort((a, b) => a - b) : [...this].sort((a, b) => b - a);
};
