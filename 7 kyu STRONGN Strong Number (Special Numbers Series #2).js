// https://www.codewars.com/kata/5a4d303f880385399b000001



const strong = (num) => {
  let sumOfFactorials = Array.from(String(num), Number)
    .map((num) =>
      Array.from({ length: num }, () => num--)
      .reduce((product, num) => product * num, 1))
    .reduce((total, num) => total + num);
  

  return sumOfFactorials == num ? 'STRONG!!!!' : 'Not Strong !!';
};
