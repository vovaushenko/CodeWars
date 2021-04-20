// https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript

const calculate = (a, o, b) => {
  switch (o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b ? a / b : null;
    default:
      return null;
  }
};
