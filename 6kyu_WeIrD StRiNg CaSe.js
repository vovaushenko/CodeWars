// https://www.codewars.com/kata/52b757663a95b11b3d00062d

const toWeirdCase = (str) => {
  let arr = str.split(" ");

  let solution = "";

  const weirdCaseMaker = (a) => {
    if (a.length === 0) {
      return;
    }

    let weird = "";
    for (let i = 0; i < a[0].length; i++) {
      i % 2 === 0
        ? (weird += a[0][i].toUpperCase())
        : (weird += a[0][i].toLowerCase());
    }

    solution += weird + " ";
    weirdCaseMaker(a.slice(1));
  };

  weirdCaseMaker(arr);
  return solution.trim();
};
