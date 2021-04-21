// 848. Shifting Letters
// We have a string S of lowercase letters, and an integer array shifts.

// Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

// Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

// Return the final string after all such shifts to S are applied.
const shiftChar = (char, shift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const currentIndex = alphabet.indexOf(char);
  let newId = currentIndex + shift;

  return alphabet[newId % alphabet.length];
};

const shiftingLetters = (str, shifts) => {
  let totalShift = shifts.reduce((a, b) => a + b);
  let res = '';

  for (let i = 0; i < str.length; i++) {
    res += shiftChar(str[i], totalShift);
    totalShift -= shifts[i];
  }

  return res;
};
