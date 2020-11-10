// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  let jadenCase = [];
  let arr = this.split(' ');

  const jadeMaker = (a) => {
    if (a.length === 0) {
      return;
    }
    let word = '';
    for (let i = 0; i < a[0].length; i++) {
      if (i === 0) {
        word += a[0][i].toUpperCase();
      } else {
        word += a[0][i];
      }
    }
    jadenCase.push(word);
    jadeMaker(a.slice(1));
  };

  jadeMaker(arr);
  return jadenCase.join(' ');
};
