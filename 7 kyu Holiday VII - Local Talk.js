// https://www.codewars.com/kata/57e92812750fcc051800004d

const pak = (str) => {
  let words = str.split(' ').filter((w) => w);
  let res = [];
  for (let i = 0; i < words.length; i++) {
    res.push(words[i]);
    if (i !== words.length - 1) res.push('pak');
  }
  return res.join(' ');
};
