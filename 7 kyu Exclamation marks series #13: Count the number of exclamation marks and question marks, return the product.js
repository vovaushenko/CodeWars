// https://www.codewars.com/kata/57fb142297e0860073000064

const product = (s) => charCountOf(s, '!') * charCountOf(s, '?');

const charCountOf = (s, char) => [...s].filter((c) => c === char).length || 0;
