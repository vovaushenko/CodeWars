// https://www.codewars.com/kata/594093784aafb857f0000122

const diff = (a, b) => {
  const difference = [];
  for (let num of a) {
    if (!b.includes(num) && !difference.includes(num)) difference.push(num);
  }
  for (let num of b) {
    if (!a.includes(num) && !difference.includes(num)) difference.push(num);
  }

  return difference.sort();
};
