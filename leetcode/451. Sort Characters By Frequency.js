// 451. Sort Characters By Frequency

const frequencySort = (s) => {
  var map = [...s].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

  return [...s]
    .sort((a, b) => (map[b] !== map[a] ? map[b] - map[a] : b.charCodeAt(0) - a.charCodeAt(0)))
    .join('');
};
