// https://www.codewars.com/kata/5e4217e476126b000170489b

function polydivisible(x) {
  let str = x.toString();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (parseInt(newStr) % (i + 1) !== 0) {
      return false;
    }
  }
  return true;
}
