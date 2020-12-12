// https://www.codewars.com/kata/55968ab32cf633c3f8000008

const initials = (n) => {
  let distinctWords = n.split(' ');
  return distinctWords
    .map((a, id) =>
      id !== distinctWords.length - 1 ? a[0].toUpperCase() : a[0].toUpperCase() + a.slice(1)
    )
    .join('.');
};
