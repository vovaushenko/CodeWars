// https://www.codewars.com/kata/5ace2d9f307eb29430000092

const modifyMultiply = (str, loc, num) => {
  const words = str.split(' ').filter((word) => word.length > 1);
  const word = words[loc - 1] || words[words.length - 1];

  return Array.from({ length: num }, () => word).join('-');
};
