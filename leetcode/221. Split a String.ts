// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

const balancedStringSplit = (s: string): number => {
  let rCounter = 0;
  let lCounter = 0;
  let balancedCounter = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === 'R' ? rCounter++ : lCounter++;
    if (rCounter === lCounter) balancedCounter++;
  }

  return balancedCounter;
};
