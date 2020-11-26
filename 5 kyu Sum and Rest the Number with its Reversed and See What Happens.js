// https://www.codewars.com/kata/5603a9585480c94bd5000073

const sumDifRev = (num) => {
  let res = [];
  for (let i = 44; i < Infinity; i++) {
    let strI = [...(i + '')];
    if (strI[strI.length - 1] === '0') {
      continue;
    }
    let sum = i + parseInt([...(i + '')].reverse().join(''));
    let abs = Math.abs(i - parseInt([...(i + '')].reverse().join('')));
    if (sum % abs === 0) {
      res.push(i);
    }
    if (res.length == num) break;
  }
  
  return res[num - 1];
};
