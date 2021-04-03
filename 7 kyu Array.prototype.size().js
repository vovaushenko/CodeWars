Array.prototype.size = function () {
  let count = 0;
  for (let el of this) count++;
  return count;
};
