const present = (x, y) => {
  if (x === 'crap') return [...x].sort().join('');
  if (x === 'badpresent') return 'Take this back!';
  if (x === 'goodpresent')
    return [...x].map((char) => String.fromCharCode(char.charCodeAt(0) + y)).join('');
  if (x === 'bang') return [...x].map((char) => char.charCodeAt(0) - y).reduce((a, b) => a + b, 0);

  if (x === 'dog') return 'pass out from excitement y times'.repeat(y);
};

console.log(present('goodpresent', 9));
