// https://www.codewars.com/kata/588e0f11b7b4a5b373000041

const lowestTemp = (t) => Math.min(...t.split(' ').map(Number)) || null;
