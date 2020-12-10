// https://www.codewars.com/kata/5b16490986b6d336c900007d

const myLanguages = (obj) => {
  const pairs = Object.entries(obj);
  return pairs
    .filter((lang) => lang[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((lang) => lang[0]);
};