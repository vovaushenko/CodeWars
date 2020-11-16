// https://www.codewars.com/kata/5a58d889880385c2f40000aa

const automorphic = (num) => {
  let numSquared = String(num ** 2);
  return numSquared.slice(-String(num).length) === String(num)
    ? 'Automorphic'
    : 'Not!!';
};
