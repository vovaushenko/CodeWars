// https://www.codewars.com/kata/54e6533c92449cc251001667

function uniqueInOrder(str) {
  let result = [];

  function helper(s) {
    if (s.length === 0) {
      return;
    }
    if (s[0] !== s[1]) {
      result.push(s[0]);
    }
    if (typeof str === 'object') {
      helper(s.slice(1));
    } else {
      helper(s.substring(1));
    }
  }
  helper(str);
  return result;
}

uniqueInOrder('AAAABBBCCDAABBB');
