// https://www.codewars.com/kata/55b4f9906ac454650900007d

const stringChunk = (str, size) => {
  if (size < 1 || typeof size != 'number' || size === undefined) return [];
  let res = [];

  (function slicer(s) {
    if (!s.length) return;
    res.push(s.slice(0, size));

    slicer(s.substring(size));
  })(str);

  return res;
};
