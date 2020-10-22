//https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
  if (ls.length === 0) return [0];

  let lsSolution = [];
  //lets find total of the elements in el
  let lsSum = ls.reduce((sum, el) => sum + el);
  //push sum as a first element
  lsSolution.push(lsSum);
  //substract elements of ls from the sum and push them into solution array
  for (let i = 0; i < ls.length; i++) {
    lsSum -= ls[i];
    lsSolution.push(lsSum);
  }
  return lsSolution;
}
