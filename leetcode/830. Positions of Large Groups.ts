// 830. Positions of Large Groups
// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

const largeGroupPositions = (s: string): number[][] => {
  const res: number[][] = [];
  let [i, j] = [0, 1];

  while (j < s.length) {
    if (s[i] === s[j]) {
      j++;
      if (s[i] !== s[j]) {
        if (j - i >= 3) res.push([i, j - 1]);
        i = j;
      }
    }
    if (s[i] !== s[j]) {
      i++;
      j++;
    }
  }

  return res;
};
