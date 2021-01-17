// 242. Valid Anagram
// Share
// Given two strings s and t , write a function to determine if t is an anagram of s.

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const hashS = [...s].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
    const hashT = [...t].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

    for (let key in hashS) {
        if (!(key in hashT)) return false;
        if (!(hashS[key] == hashT[key])) return false;
    }

    return true;
};
