// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0 || number < 1) {
    return 0;
  }
  let total = 0;
  function willDoTheMagic(num) {
    if (num === 0) {
      return;
    }

    if (num % 5 === 0 || num % 3 === 0) {
      total += num;
    }
    willDoTheMagic(num - 1);
  }

  willDoTheMagic(number - 1);
  return total;
}
