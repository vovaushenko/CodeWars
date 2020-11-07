// https://www.codewars.com/kata/535474308bb336c9980006f2

const greet = (name) => {
  // firstly capitalize and add !
  let capitalized = '';
  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      capitalized += name[i].toUpperCase();
    } else {
      capitalized += name[i].toLowerCase();
    }
  }

  return `Hello ${capitalized}!`;
};
