// https://www.codewars.com/kata/5244b0588978473f9500002b

const solution = (data, replace) => {
  const traverse = (d) => {
    for (let key in d) {
      if (typeof d[key] !== 'object') {
        if (d[key] === 'dynamic') d[key] = replace;
      } else {
        traverse(d[key]);
      }
    }
  };

  traverse(data);

  return data;
};
