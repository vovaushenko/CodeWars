// https://www.codewars.com/kata/5544c7a5cb454edb3c000047


const bouncingBall = (h, bounce, window) => {
  let bounces = -1;

  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      rebounds += 2;
      h *= bounce;
    }
  }
  return bounces;
};
