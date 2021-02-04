// https://www.codewars.com/kata/52998bf8caa22d98b800003a

const manhattanDistance = (a, b) =>
  a.reduce((total, coord, id) => total + Math.abs(coord - b[id]), 0);
