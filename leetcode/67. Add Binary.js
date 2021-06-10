// https://leetcode.com/problems/add-binary/

/*
Given two binary strings a and b, return their sum as a binary string.
*/

const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
