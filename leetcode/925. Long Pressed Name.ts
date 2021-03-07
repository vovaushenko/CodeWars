// 925. Long Pressed Name
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
const isLongPressedName = (name: string, typed: string): boolean => {
  let j = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[j]) {
      j++;
    } else if (typed[i] === name[j - 1]) {
      continue;
    } else {
      return false;
    }
  }

  return j === name.length;
};
