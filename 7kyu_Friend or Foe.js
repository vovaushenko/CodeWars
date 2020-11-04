// https://www.codewars.com/kata/55b42574ff091733d900002f

const friend = (arr) => {
  let solution = [];
  for (el of arr) {
    if (el.length === 4) {
      solution.push(el);
    }
  }
  return solution;
};

friend(["Ryan", "Kieran", "Mark"]);
