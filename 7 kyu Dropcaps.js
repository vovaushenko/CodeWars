// https://www.codewars.com/kata/559e5b717dd758a3eb00005a

const dropCap = (str) =>
  str
    .split(' ')
    .map((word) =>
      word.length > 2 ? word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase() : word
    )
    .join(' ');
