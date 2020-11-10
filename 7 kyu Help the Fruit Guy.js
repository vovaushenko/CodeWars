// https://www.codewars.com/kata/557af4c6169ac832300000ba

const removeRotten = (arr) => {
  if (arr === null || arr === undefined) {
    return [];
  }
  let solution = [];
  for (let fruit of arr) {
    let lowerCaseFruit = '';
    for (let char of fruit) {
      lowerCaseFruit += char.toLowerCase();
    }

    solution.push(lowerCaseFruit.replace('rotten', ''));
  }
  return solution;
};
