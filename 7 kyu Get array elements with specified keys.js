Array.prototype.only = function (keys) {
  const res = [];
  keys.sort((a, b) => a - b);
  for (let key of keys) {
    res.push(this[key]);
  }
  return res;
};
