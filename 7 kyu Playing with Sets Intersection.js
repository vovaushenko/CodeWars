// https://www.codewars.com/kata/5a662a02e626c54e87000123

const inter = (s1, s2) => {
  const intersection = new Set();
  for (let val of s1) {
    if (s2.has(val)) intersection.add(val);
  }

  return intersection;
};
