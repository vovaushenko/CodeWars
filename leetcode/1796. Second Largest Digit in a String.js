//1796. Second Largest Digit in a String

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

const secondHighest = (s) => {
  const allNumbers = Object.keys(
    [...s].reduce(
      (numbers, char) => (char * 1 || char === '0' ? (numbers[char] = true) : null, numbers),
      {}
    )
  );

  return allNumbers.length > 1 ? +allNumbers[allNumbers.length - 2] : -1;
};
