// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let value = 0;
  let a = x.split(" ");
  let values = [];
  console.log(a);

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a[i].length; j++) {
      sum += alphabet.indexOf(a[i][j]);
    }
    values.push(sum);
  }

  let max = Math.max(...values);

  return a[values.indexOf(max)];
}
