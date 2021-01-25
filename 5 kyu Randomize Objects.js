// https://www.codewars.com/kata/5303229f1f5c12ef39000061

Object.prototype.random = function () {
  let numbers = this.toRandomArray();
  let randomId = Math.floor(Math.random() * numbers.length);
  return numbers[randomId];
};

Object.prototype.toRandomArray = function () {
  const values = [];

  let traverse = (object) => {
    for (let key in object) {
      if (typeof object[key] !== 'object') {
        if (typeof object[key] !== 'function') {
          values.push(object[key]);
        }
      } else {
        traverse(object[key]);
      }
    }
  };

  traverse(this);

  for (var i = values.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }
  return values;
};
