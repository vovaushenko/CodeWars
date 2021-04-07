// https://www.codewars.com/kata/586305e8916e244b66001a93

const mirror = (obj) =>
  Object.keys(obj).reduce(
    (mirrored, k) => ((mirrored[k] = [...k].reverse().join('')), mirrored),
    {}
  );
