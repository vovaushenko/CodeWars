// https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript

Array.prototype.newReverse = function () {
  const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);
  let i = 0;
  let j = this.length - 1;

  while (i < j) {
    swap(this, i, j);
    i++;
    j--;
  }

  return this;
};
