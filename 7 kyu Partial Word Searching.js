// https://www.codewars.com/kata/54b81566cd7f51408300022d

const wordSearch = (pattern, array) => {
  res = array.filter((a) => a.toLowerCase().includes(pattern.toLowerCase()));

  return res.length !== 0 ? res : ['Empty'];
};