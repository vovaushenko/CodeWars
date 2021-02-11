// 791. Custom Sort String
// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

const customSortString = (s: string, t: string): string => {
  let nonOrder = [...t].filter((char) => !s.includes(char)).join('');

  const diff = t.length - s.length;
  const times = (t.length - diff) / s.length;
  const res = s.repeat(times) + nonOrder;

  return res;
};

console.log(customSortString('cba', 'abcd'));
