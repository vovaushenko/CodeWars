// https://www.codewars.com/kata/5f631ed489e0e101a70c70a0

const ìsZeroBalanced = (n) => {
  if (n.length % 2 !== 0) return false;
  if (n.reduce((a, b) => a + b, 0)) return false;

  const sorted = [...n].sort((a, b) => a - b);

  let [i, j] = [0, sorted.length - 1];
  while (i < j) {
    if (sorted[i] + sorted[j]) return false;
    i++;
    j--;
  }

  return true;
};
