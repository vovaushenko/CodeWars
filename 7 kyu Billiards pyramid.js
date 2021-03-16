// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912

const pyramid = (balls) => {
  let counter = 1;
  let levels = 0;
  while (balls >= 0) {
    balls -= counter;
    if (balls < 0) break;
    counter++;
    levels++;
  }

  return levels;
};
