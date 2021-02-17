// https://www.codewars.com/kata/57f759bb664021a30300007d

const switcheroo = (x) =>
  [...x].map((char) => (char === 'a' ? 'b' : char === 'b' ? 'a' : char)).join('');
