const arr2bin = (arr) => {
  const charsOrFloats = arr.filter((num) => typeof num !== 'number' || num % 1 !== 0);
  if (charsOrFloats.length) return 'false';

  return arr.reduce((a, b) => a + b, 0).toString(2);
};
