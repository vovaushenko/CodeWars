// https://www.codewars.com/kata/603b2bb1c7646d000f900083

const shifter = (sentence) => {
  const allShifterWords = sentence
    .split(' ')
    .filter((word) => [...word].every((char) => 'HINOSXZMW'.includes(char)))
    .filter((x) => x);

  return [...new Set(allShifterWords)].length;
};
