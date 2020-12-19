// https://www.codewars.com/kata/57f75cc397d62fc93d000059

const calc = (str) => {
  let toASCII = [...str].map((char) => char.charCodeAt(0)).join('');
  let replacedOnes = [...toASCII]
    .map((char) => (char === '7' ? (char = 1) : (char = char)))
    .join('');

  let firstSum = [...toASCII].reduce((total, num) => total + Number(num), 0);
  let secondSum = [...replacedOnes].reduce((total, num) => total + Number(num), 0);

  return firstSum - secondSum;
};
