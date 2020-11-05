// https://www.codewars.com/kata/5bc052f93f43de7054000188

const solve = (str1, str2) => {
  if (str1 === '*' || str1 === str2) {
    return true;
  }
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (
      (str1[i] !== str2[j] && str1[i] !== '*') ||
      str1.length - str2.length >= 2
    ) {
      return false;
    } else if (
      (str1[i] === '*' && str1[str1.length - 1] === str2[str2.length - 1]) ||
      str1[str1.length - 1] === '*'
    ) {
      return true;
    }

    i++;
    j++;
  }
  return false;
};
