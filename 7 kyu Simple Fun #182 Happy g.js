// https://www.codewars.com/kata/58bcd27b7288983803000002

const gHappy = (str) => !str.replace(/g{2,}/g, '').includes('g');
