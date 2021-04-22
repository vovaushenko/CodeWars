const secondHighest = (s) => {
  const allNumbers = Object.keys(
    [...s].reduce(
      (numbers, char) => (char * 1 || char === '0' ? (numbers[char] = true) : null, numbers),
      {}
    )
  );

  return allNumbers.length > 1 ? +allNumbers[allNumbers.length - 2] : -1;
};

console.log(secondHighest('ck077'));
