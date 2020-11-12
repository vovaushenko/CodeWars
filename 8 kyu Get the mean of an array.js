// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

const getAverage = (marks) => {
  marksAverage = marks.reduce((total, mark) => mark + total);

  return Math.floor(marksAverage / marks.length);
};
