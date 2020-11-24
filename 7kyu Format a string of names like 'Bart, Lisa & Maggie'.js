// https://www.codewars.com/kata/53368a47e38700bd8300030d

const list = (names) => {
  if (names.length === 0) return '';

  return names
    .map((a) => a.name)
    .reduce((total, el, id) => {
      if (id != names.length - 1) {
        return `${total}, ${el}`;
      } else {
        return `${total} & ${el}`;
      }
    });
};