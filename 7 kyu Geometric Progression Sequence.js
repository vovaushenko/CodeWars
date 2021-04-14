// https://www.codewars.com/kata/55caef80d691f65cb6000040

const geometricSequenceElements = (base, constant, len) => {
  const result = [];
  let currentNum = base;
  while (result.length < len) {
    result.push(currentNum);
    currentNum *= constant;
  }

  return result.join(', ');
};
