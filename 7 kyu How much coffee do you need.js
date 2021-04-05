// https://www.codewars.com/kata/57de78848a8b8df8f10005b1

const howMuchCoffee = (events) => {
  const lookup = ['dog', 'cat', 'movie', 'cw', 'DOG', 'CAT', 'CW', 'MOVIE'];
  const coffeeCups = events
    .filter((e) => lookup.includes(e))
    .reduce((cups, e) => (lookup.indexOf(e) < 4 ? cups + 1 : cups + 2), 0);
  return coffeeCups <= 3 ? coffeeCups : 'You need extra sleep';
};
