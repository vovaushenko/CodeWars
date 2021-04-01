// 1576. Replace All ?'s to Avoid Consecutive Repeating Characters

// Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

// Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

const modifyString = (s: string): string => {
  let arrEn = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '?') res += s[i];
    else {
      res += arrEn.find(
        (letter) => letter !== res[res.length - 1] && letter !== s[i - 1] && letter !== s[i + 1]
      );
    }
  }

  return res;
};

console.log(modifyString('j?ag??b'));
