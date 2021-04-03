// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

const xMarksTheSpot = (input) => {
  const location = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes('x')) location.push(i, input[i].indexOf('x'));
  }

  return location.length === 2 ? location : [];
};
