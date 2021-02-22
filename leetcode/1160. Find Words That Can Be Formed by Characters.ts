// 1160. Find Words That Can Be Formed by Characters

const generateHash = (str: string): { [key: string]: number } => {
  const hash: { [key: string]: number } = {};
  for (let char of str) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  return hash;
};

const countCharacters = (words: string[], chars: string): number => {
  const map: { [key: string]: number } = {};

  for (let char of chars) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  let counter = 0;

  for (let word of words) {
    let hash = generateHash(word);
    let matchingWord = true;
    for (let key in hash) {
      if (!(key in map)) matchingWord = false;
      if (map[key] < hash[key]) matchingWord = false;
    }

    if (matchingWord) counter += word.length;
  }

  return counter;
};
