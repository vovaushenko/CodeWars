// https://www.codewars.com/kata/5865a75da5f19147370000c7

const addArrays = (a1, a2) => {
  if (a1.length !== a2.length) throw new Error('Lengths do not match');
  return a1.reduce((sum, num, id) => sum.concat(num + a2[id]), []);
};
