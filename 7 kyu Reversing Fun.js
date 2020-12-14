// https://www.codewars.com/kata/566efcfbf521a3cfd2000056

const flipNumber = (str) => {
  let result = '';

  let reverser = (s) => {
    if (s.length === 0) return;
    s = s.reverse();
    result += s[0];
    reverser(s.slice(1));
  };

  reverser([...str]);
  return result;
};