// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5

const turnWordInsideOut = (word) => {
  if (word.length % 2 === 0) {
    return (
      [...word.slice(0, word.length / 2)].reverse().join('') +
      [...word.slice(word.length / 2)].reverse().join('')
    );
  } else {
    let midId = ~~(word.length / 2);
    return (
      [...word.slice(0, midId)].reverse().join('') +
      word[midId] +
      [...word.slice(midId + 1)].reverse().join('')
    );
  }
};

const insideOut = (sentence) =>
  sentence
    .split(' ')
    .map((word) => turnWordInsideOut(word))
    .join(' ');
