// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a

const replaceAll = (seq, find, replace) => {
  if (typeof seq === 'string') {
    return seq
      .split('')
      .map((num) => (num === find ? (num = replace) : num))
      .join('');
  } else {
    return seq.map((num) => (num === find ? (num = replace) : num));
  }
};