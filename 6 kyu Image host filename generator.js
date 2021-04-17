const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const generateRandomChar = () => alphabet[~~(Math.random() * 51)];

const generateName = () => Array.from({ length: 6 }, () => generateRandomChar()).join('');
console.log(generateName());
