// 387. First Unique Character in a String

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

const firstUniqChar = (s) => {
    let map = {};
    for (let char of s) map[char] ? map[char]++ : (map[char] = 1);

    let unique;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] == 1) {
            unique = i;
            break;
        }
    }
    return unique || unique == 0 ? unique : -1;
};
