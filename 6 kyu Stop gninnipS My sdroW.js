// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

const spinWords = (str) => {
  let arrOfWords = str.split(' ');
  let res = [];
  for (let word of arrOfWords) {
    word.length >= 5 
    ? res.push([...word].reverse().join('')) 
    : res.push(word);
  }
  return res.join(' ')
};