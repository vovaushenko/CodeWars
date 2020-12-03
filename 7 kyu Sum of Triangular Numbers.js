// https://www.codewars.com/kata/580878d5d27b84b64c000b51

const generateTriangulars = (n) => {
  let triangulars = [];
  let num = 1;
  let step = 2;
  while (triangulars.length !== n) {
    triangulars.push(num);
    num = num + step;
    step++;
  }
  return triangulars;
};

const sumTriangularNumbers = (limit) => limit > 0 ? generateTriangulars(limit).reduce((a, b) => a + b, 0) : 0;