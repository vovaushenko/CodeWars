// https://www.codewars.com/kata/513e08acc600c94f01000001

const rgb = (r, g, b) => {
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;

  let resR = [Math.floor(r / 16).toString(16), (r % 16).toString(16)]
    .map((a) => a.toUpperCase())
    .join('');
  let resG = [Math.floor(g / 16).toString(16), (g % 16).toString(16)]
    .map((a) => a.toUpperCase())
    .join('');
  let resB = [Math.floor(b / 16).toString(16), (b % 16).toString(16)]
    .map((a) => a.toUpperCase())
    .join('');

  return resR + resG + resB;
};