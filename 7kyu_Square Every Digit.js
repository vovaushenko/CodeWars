// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  let str = num.toString();
  let solution = parseInt(
    [...str]
      .map(Number)
      .map((number) => number ** 2)
      .join('')
  );

  return solution;
}
