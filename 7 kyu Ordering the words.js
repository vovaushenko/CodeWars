// https://www.codewars.com/kata/55d7e5aa7b619a86ed000070

const orderWord = (str) =>
  str ? [...str].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('') : 'Invalid String!';