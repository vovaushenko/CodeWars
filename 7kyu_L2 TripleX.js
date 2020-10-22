// https://www.codewars.com/kata/568dc69683322417eb00002c

function tripleX(str) {
  if (str === '' || str.indexOf('x') === -1) return false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      if (str[i + 1] != 'x' || str[i + 2] !== 'x') {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(tripleX('aaaaa'));
