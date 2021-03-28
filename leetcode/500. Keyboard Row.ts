// 500. Keyboard Row
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

const findWords = (words: string[]): string[] => {
  let foundWords: string[] = [];

  for (let word of words) {
    if (isValidWord(word)) foundWords.push(word);
  }

  return foundWords;
};

const isValidWord = (word: string): boolean => {
  const keybordRows: { [key: string]: string } = {
    1: 'qwertyuiop',
    2: 'asdfghjkl',
    3: 'zxcvbnm',
  };
  word = word.toLowerCase();
  let possibleRow: number = 0;

  for (let key in keybordRows) {
    if (keybordRows[key].includes(word[0])) possibleRow = +key;
  }

  for (let char of word) {
    if (!keybordRows[possibleRow].includes(char)) return false;
  }

  return true;
};
