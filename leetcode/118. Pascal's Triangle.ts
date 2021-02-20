// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const generateRow = (prevRow: number[]): number[] => {
  const result = [];
  let i = 0;
  let j = 1;

  while (j < prevRow.length) {
    result.push(prevRow[i] + prevRow[j]);
    i++;
    j++;
  }

  return [prevRow[0], ...result, prevRow[prevRow.length - 1]];
};

const generate = (numRows: number): number[][] => {
  if (numRows === 1) return [[1]];
  const triangle = [[1], [1, 1]];
  if (numRows === 2) return triangle;

  while (triangle.length < numRows) {
    const triangleRow = generateRow(triangle[triangle.length - 1]);

    triangle.push(triangleRow);
  }

  return triangle;
};
