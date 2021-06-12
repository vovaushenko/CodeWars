// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

const checkIfPangram = (sentence) => [...new Set(sentence)].length === 26;

console.log(sentence('leetcode'));
