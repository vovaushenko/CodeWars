// https://www.codewars.com/kata/5a662a02e626c54e87000123

const rotate = (str) => str.slice(1) + str.slice(0, 1);

const scrollingText = (str) => {
  const rotations = [];
  let tempRot = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    rotations.push(tempRot);
    tempRot = rotate(tempRot);
  }

  return rotations;
};
