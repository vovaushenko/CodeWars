// https://www.codewars.com/kata/5551dc71101b2cf599000023/train/javascript

const maxPizza = (cut) => (cut < 0 ? -1 : !cut ? 1 : (cut * (cut + 1)) / 2 + 1);
