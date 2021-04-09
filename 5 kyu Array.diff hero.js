// https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8

const array_diff_very_fast = (a, b) => {
  let mapB = b.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
  return a.filter((char) => !(char in b.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {})));
};
