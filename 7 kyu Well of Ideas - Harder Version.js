// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

const well = (x) => {
  const numberOfGoodIdeas = x
    .map((row) => row.filter((word) => typeof word === 'string' && word.toLowerCase() === 'good'))
    .reduce((goodIdeas, row) => goodIdeas + row.length, 0);

  if (!numberOfGoodIdeas) return 'Fail!';

  return numberOfGoodIdeas > 2 ? 'I smell a series!' : 'Publish!';
};
