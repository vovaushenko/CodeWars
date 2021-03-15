// 844. Backspace String Compare

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

const backspaceCompare = (s: string, t: string): boolean =>
  backspaceRemove(s) === backspaceRemove(t);

const backspaceRemove = (s: string): string => {
  const result = [];
  for (let char of s) {
    char !== '#' ? result.push(char) : result.pop();
  }
  return result.join('');
};
