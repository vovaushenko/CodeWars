// https://www.codewars.com/kata/580755730b5a77650500010c

const sortMyString = (str) => {
  let oddIds = [...str].filter((a, id) => id % 2 !== 0).join('');
  let evenIds = [...str].filter((a, id) => id % 2 === 0).join('');
  return evenIds + ' ' + oddIds;
};