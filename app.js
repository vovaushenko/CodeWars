const generate = (length) => Array.from({ length }, () => ~~(Math.random() * 2)).join('');

console.log(generate(5));
