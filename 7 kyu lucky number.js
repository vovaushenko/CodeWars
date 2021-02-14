// https://www.codewars.com/kata/55afed09237df73343000042

const isLucky = (n) => (n !== 0 ? [...(n + '')].reduce((a, b) => a + b, 0) % 9 === 0 : true);
