// https://www.codewars.com/kata/55c353487fe3cc80660001d4/train/javascript

const capitalsFirst = (str) => {
  let res = [];
  const words = str
    .split(' ')
    .map((word) => (word[0].match(/[a-zA-Z]+/g) ? word : ''))
    .filter((word) => word);
  console.log(words);
  for (let word of words) {
    word[0] === word[0].toUpperCase() && res.push(word);
  }
  for (let word of words) {
    word[0] !== word[0].toUpperCase() && res.push(word);
  }

  console.log(res);
};
capitalsFirst('hey You, Sort me Already!');
