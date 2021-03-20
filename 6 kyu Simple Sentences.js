const makeSentence = (words) => {
  words = words.filter((word) => word !== '.');
  let res = '';
  for (let i = 0; i < words.length; i++) {
    res += words[i];
    if (words[i + 1] !== ',') res += ' ';
  }
  return res.trim() + '.';
};
