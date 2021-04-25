// https://www.codewars.com/kata/5624e574ec6034c3a20000e6

const hammingDistance = (s1, s2) => [...s1].filter((bit, id) => bit !== s2[id]).length;
