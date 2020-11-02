// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  num = String(num);
  let res = "";
  for (let i = 0; i < num.length; i++) {
    let ress = `${Number(num[i]) * 10 ** (num.length - i - 1)}`;
    if (ress > 0) {
      res += ress + " + ";
    }
  }
  return res.substring(0, res.length - 3);
}

expandedForm(70304);
