// https://www.codewars.com/kata/56b0bc0826814364a800005a

const cyclops = (num) => {
  const binary = num.toString(2);
  if (binary.length % 2 === 0) return false;
  let ones = [...binary].filter((bit) => bit === '1');
 
  if (binary.length - 1 !== ones.length) return false;
  if (binary[Math.floor(binary.length / 2)] !== '0') return false;
  return true;
};