// https://www.codewars.com/kata/5768a693a3205e1cc100071f

const initializeNames = (name) => {
  name = name.split(' ');
  if (name.length < 3) return name.join(' ');

  return name
    .map((a, id) => (id === 0 || id === name.length - 1 ? a : a[0].toUpperCase() + '.'))
    .join(' ');
};