// https://www.codewars.com/kata/5865cff66b5699883f0001aa

const toTime = (seconds) => {
  let hours = 0;
  let minutes = 0;
  while (seconds >= 3600) {
    seconds -= 3600;
    hours++;
  }
  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }

  return `${hours} hour(s) and ${minutes} minute(s)`;
};
