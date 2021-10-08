// https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d

const removeChars = (str) => (str.match(/[a-z ]/gi) ?? []).join('');
