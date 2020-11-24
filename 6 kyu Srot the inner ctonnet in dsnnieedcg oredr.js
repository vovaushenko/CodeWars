// https://www.codewars.com/kata/5898b4b71d298e51b600014b

// const word = 'sort';

const sortTheInnerContent = (words) => {
  let arrOfWords = words.split(' ');
  let result = [];

  for (let word of arrOfWords) {
    if (word.length !== 1) {
      let mixedUpWord =
        word[0] +
        [...word.slice(1, word.length - 1)].sort().reverse().join('') +
        word[word.length - 1];
      result.push(mixedUpWord);
    } else {
      result.push(word);
    }
  }

  return result.join(' ');
};