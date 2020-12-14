// https://www.codewars.com/kata/56b97b776ffcea598a0006f2

const bubblesortOnce = (a) => {
  const swap = (a, id1, id2) => ([a[id1], a[id2]] = [a[id2], a[id1]]);

  for (let i = a.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
      }
    }
    break;
  }
  return a
};