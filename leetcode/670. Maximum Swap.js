// 670. Maximum Swap
// Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

const swap = (a, id1, id2) => ([a[id1], a[id2]] = [a[id2], a[id1]]);

const maximumSwap = (num) => {
  let max = num;
  num = [...(num + '')];
  for (let i = 0; i < num.length; i++) {
    for (j = 0; j < num.length; j++) {
      let temparr = [...num];
      swap(temparr, i, j);

      max = Math.max(max, +temparr.join(''));
    }
  }

  return max;
};
