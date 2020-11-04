// https://www.codewars.com/kata/5663f5305102699bad000056

const mxdiflg = (a1, a2) => {
  console.log(a1);
  console.log(a2);
  a1.sort((a, b) => b.length - a.length);
  a2.sort((a, b) => a.length - b.length);
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let scenario1 = Math.abs(a1[0].length - a2[0].length);
  let scenario2 = Math.abs(a1[a1.length - 1].length - a2[a2.length - 1].length);
  return scenario1 > scenario2 ? scenario1 : scenario2;
};
