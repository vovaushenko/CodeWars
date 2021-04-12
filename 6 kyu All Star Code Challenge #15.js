// https://www.codewars.com/kata/586560a639c5ab3a260000f3

const rotate = (str) => {
  const rotations = [];
  let i = 0;
  while (i < str.length) {
    str = str.slice(1) + str.slice(0, 1);
    rotations.push(str);
    i++;
  }

  return rotations;
};
