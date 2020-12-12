// https://www.codewars.com/kata/526e8de0512511429e000006/train/javascript

String.prototype.trim1 = function () {
  let i = 0;
  let j = this.length - 1;

  while (this[i] === ' ') {
    i++;
  }

  while (this[j] === ' ') {
    j--;
  }
  return this.slice(i, j + 1);
};
