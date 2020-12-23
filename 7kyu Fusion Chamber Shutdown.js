// https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9

const burner = (c, h, o) => {
  let water = 0;
  while (h > 1 && o > 0) {
    h -= 2;
    o--;
    water++;
  }

  let carbonDioxide = 0;
  while (c > 0 && o > 1) {
    c--;
    o -= 2;
    carbonDioxide++;
  }

  let methane = 0;
  while (c > 0 && h > 3) {
    c--;
    h -= 4;
    methane++;
  }

  return [water, carbonDioxide, methane];
};