// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase = function () {
  const str = this;
  let arr = str.split(' ');
  let solution = [];

  const camelCaseMaker = (a) => {
    if (a.length === 0) {
      return;
    }
    let camelWord = '';
    for (let i = 0; i < a[0].length; i++) {
      if (i === 0) {
        camelWord += a[0][i].toUpperCase();
      } else {
        camelWord += a[0][i].toLowerCase();
      }
    }

    solution.push(camelWord);

    camelCaseMaker(a.splice(1));
  };

  camelCaseMaker(arr);
  return solution.join('');
};
