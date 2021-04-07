// 1189. Maximum Number of Balloons
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

const maxNumberOfBalloons = (str) => {
  const balooonMap = [...str]
    .filter((char) => 'balloon'.includes(char))
    .sort()
    .reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

  for (let char of 'balon') {
    if (!(char in balooonMap)) return 0;
  }

  if (balooonMap['l'] < 2 || balooonMap['o'] < 2) return 0;
  balooonMap['l'] = Math.floor(balooonMap['l'] / 2);
  balooonMap['o'] = Math.floor(balooonMap['o'] / 2);

  return Math.min(...Object.values(balooonMap));
};
