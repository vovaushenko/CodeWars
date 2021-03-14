// 1003. Check If Word Is Valid After Substitutions

// Given a string s, determine if it is valid.

// A string s is valid if, starting with an empty string t = "", you can transform t into s after performing the following operation any number of times:

// Insert string "abc" into any position in t. More formally, t becomes tleft + "abc" + tright, where t == tleft + tright. Note that tleft and tright may be empty.
// Return true if s is a valid string, otherwise, return false.

function isValid(s: string): boolean {
  while (s.length) {
    if (s === s.replace(/abc/g, '')) return false;
    s = s.replace(/abc/g, '');
  }

  return true;
}

console.log(isValid('abccba'));

// const isValid = (S) => {
//   if (S.length < 3) return false;
//   let current = S, replaced = S.replace(/abc/g, '');
//   while (current !== replaced) {
//       current = replaced;
//       replaced = replaced.replace(/abc/g, '');
//   }
//   return replaced.length === 0;
// };
