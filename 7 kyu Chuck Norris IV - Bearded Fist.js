const fistBeard = (arr) =>
  arr
    .reduce((flat, el) => flat.concat(...el.map((char) => String.fromCharCode(char))), [])
    .join('');
