// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc

const maxRedigit = (num) =>
  num > 99 && num < 1000 ? +[...(num + '')].sort((a, b) => b - a).join('') : null;
