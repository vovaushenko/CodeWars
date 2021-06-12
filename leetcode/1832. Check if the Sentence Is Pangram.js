// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/*
1832. Check if the Sentence Is Pangram
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

const checkIfPangram = (sentence) => [...new Set(sentence)].length === 26;
