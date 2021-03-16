// https://www.codewars.com/kata/5ab363ff6a176b29880000dd

const hexHash = (code) => {
  const res = [
    ...[...code]
      .map((char) => char.charCodeAt().toString(16))
      .join('')
      .replace(/[^0-9]/gi, '')
      .split(''),
  ].reduce((a, b) => a + +b, 0);

  return res;
};
