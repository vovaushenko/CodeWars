// https://www.codewars.com/kata/529b418d533b76924600085d

const toUnderscore = (str) => {
  if (typeof str === 'number') {
    return String(str);
  }
  let sol = '';
  sol += str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i] && !parseInt(str[i])) {
      sol += '_';
      sol += str[i].toLowerCase();
    } else {
      sol += str[i];
    }
  }
  return sol;
};
