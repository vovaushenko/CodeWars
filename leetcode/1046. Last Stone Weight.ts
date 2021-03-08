// // 1046. Last Stone Weight
// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

const lastStoneWeight = (stones: number[]): number => {
  let lastStone;
  const helper = (st: number[]) => {
    if (st.length <= 1) {
      lastStone = st[0];
      return;
    }
    st.sort((a, b) => b - a);
    if (st[0] === st[1]) {
      st = st.slice(2);
    } else {
      st = [st[0] - st[1], ...st.slice(2)];
    }
    helper(st);
  };

  helper(stones);
  if (lastStone === undefined) return 0;

  return lastStone;
};
