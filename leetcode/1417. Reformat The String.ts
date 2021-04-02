// https://leetcode.com/problems/reformat-the-string/

const reformat = (s: string): string => {
  const chars = [...s.replace(/[^a-zA-Z]+/g, '')];
  const digits = [...s.replace(/\D/g, '')];
  if (chars.length === 1 && !digits.length) return chars.join('');
  if (digits.length === 1 && !chars.length) return digits.join('');
  if (chars.length - digits.length > 1 || !chars.length || !digits.length) return '';

  const reformattedChars = [];

  while (chars.length) {
    let char = chars.pop();
    let digit = digits.pop();
    reformattedChars.push(char, digit);
  }

  if (digits.length) {
    let lastDigit = digits.pop();
    reformattedChars.unshift(lastDigit);
  }

  return reformattedChars.join('');
};
