// https://www.codewars.com/kata/5da9973d06119a000e604cb6

const countingValleys = (s) => {
  let route = [...s].map((a) => {
    if (a === 'F') {
      a = 0;
    } else if (a === 'U') {
      a = 1;
    } else {
      a = -1;
    }
    return a;
  });
  let sum = 0;
  let enteredValley = false;
  let getOutOfValley = 0;
  for (let step of route) {
    sum += step;
    if (sum < 0) {
      enteredValley = true;
    }
    if (sum === 0 && enteredValley) {
      getOutOfValley++;
      enteredValley = false;
    }
  }
  return getOutOfValley;
};