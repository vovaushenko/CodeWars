// 1337. The K Weakest Rows in a Matrix
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

const kWeakestRows = (matrix: number[][], k: number): number[] => {
  const rowPower = matrix.map((row, id) => row.filter((soldier) => soldier).length);

  const map: { [key: string]: number } = {};
  for (let i = 0; i < rowPower.length; i++) {
    map[i] = rowPower[i];
  }

  const result = Object.entries(map)
    .sort((a, b) => a[1] - b[1])
    .map((pair) => +pair[0])
    .slice(0, k);

  return result;
};
