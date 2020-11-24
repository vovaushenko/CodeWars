// https://www.codewars.com/kata/588bb1195eb601f5d400001f

const sysNums = (n, sys) => {
  if (n == 0) return 0;
  return Number(n.toString(sys)) ? Number(n.toString(sys)) : n.toString(sys);
};
