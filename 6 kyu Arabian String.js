// https://www.codewars.com/kata/525821ce8e7b0d240b002615/train/javascript

const camelize = (str) => {
  str = str.replace(/[^a-zA-Z0-9]+/g, ' ');

  return str
    .toLowerCase()
    .split(' ')
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
    .join('');
};
