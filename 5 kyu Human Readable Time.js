// https://www.codewars.com/kata/52685f7382004e774f0001f7

const humanReadable = (seconds) => {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = (seconds % 3600) % 60;

  if (String(hours).length == 1) {
    hours = `0${hours}`;
  }

  if (String(minutes).length == 1) {
    minutes = `0${minutes}`;
  }

  if (String(secs).length == 1) {
    secs = `0${secs}`;
  }

  return `${hours}:${minutes}:${secs}`;
};

