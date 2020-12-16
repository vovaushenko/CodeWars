// https://www.codewars.com/kata/56a921fa8c5167d8e7000053

const password = (pass) => {
  if (pass.length < 8) return false;

  if (!pass.replace(/[^a-z]+/g, '')) return false;
  if (!pass.replace(/[^A-Z]+/g, '')) return false;
  if (!pass.replace(/[^0-9]+/g, '')) return false;

  return true;
};