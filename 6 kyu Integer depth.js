// https://www.codewars.com/kata/59b401e24f98a813f9000026

const computeDepth = (num) => {
  let arr = [];
  let step = 1;

  while (arr.length !== 10) {
    console.log(num, step);
    let tempNum = num * step;
    let toStr = [...(tempNum + '')];

    for (let digit of toStr) {
      if (!arr.includes(digit)) {
        arr.push(digit);
      }
    }

    step++;
  }
  return step - 1;
};