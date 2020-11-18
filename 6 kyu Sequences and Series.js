// https://www.codewars.com/kata/5254bd1357d59fbbe90001ec

const getScore = (n) => {
  if (n === 1) {return 50}
  let increment = 100;
  let num = 50;

  for (let i = 0; i < n; i++) {
    num += increment;
    increment += 50;
    if (i === n - 2) {
      return num;
    }
  }
};