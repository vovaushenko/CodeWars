//www.codewars.com/kata/56dbe0e313c2f63be4000b25

const vertMirror = (s) =>
  s
    .split('\n')
    .map((word) => [...word].reverse().join(''))
    .join('\n');

const horMirror = (s) => {
  const swap = (a, id1, id2) => ([a[id1], a[id2]] = [a[id2], a[id1]]);
  const words = s.split('\n');
  let i = 0;
  let j = words.length - 1;
  while (i < j) {
    swap(words, i, j);

    i++;
    j--;
  }

  return words.join('\n');
};

const oper = (f, s) => f(s);
