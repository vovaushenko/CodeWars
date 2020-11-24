// https://www.codewars.com/kata/56662e268c0797cece0000bb

const sumFibs = (num) => {
  const fibonacci_series = (n) => {
    if (n === 1) {
      return [0, 1];
    } else {
      let s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };
  let fibs = fibonacci_series(num);
  return fibs.filter((a) => a % 2 == 0).reduce((total, num) => total + num);
};