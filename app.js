String.prototype.repeat = function (count) {
  return Array.from({ length: count }, () => this).join('');
};
