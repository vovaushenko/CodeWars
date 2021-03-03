// 119. Pascal's Triangle II
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const generateRow = (arr: number[]): number[] => {
  const res = [];
  let i = 0;
  let j = 1;
  res.push(arr[0]);
  while (j < arr.length) {
    res.push(arr[i] + arr[j]);
    i++;
    j++;
  }

  res.push(arr[arr.length - 1]);

  return res;
};

const getRow = (rowIndex: number): number[] => {
  const triangle = [[1], [1, 1]];

  while (triangle.length <= rowIndex) {
    triangle.push(generateRow(triangle[triangle.length - 1]));
  }

  return triangle[rowIndex];
};
