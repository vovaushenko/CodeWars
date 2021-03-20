// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) => {
  const res = input
    .split('\n')
    .map((newLine) => markers.reduce((newLine, marker) => newLine.split(marker)[0].trim(), newLine))
    .join('\n');

  return res;
};
