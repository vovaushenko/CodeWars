// https://www.codewars.com/kata/525f50e3b73515a6db000b83

const createPhoneNumber = (arr) => {
  let firstThree = arr.slice(0, 3);
  let secondThree = arr.slice(3, 6);
  let lastFour = arr.slice(6);

  return `(${firstThree.join("")}) ${secondThree.join("")}-${lastFour.join(
    ""
  )}`;
};
