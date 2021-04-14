var AmIAfraid = function (day, num) {
  var preds = {
    Sunday: (d) => d == 666 || d == -666,
    Monday: (d) => d == 12,
    Tuesday: (d) => d > 95,
    Wednesday: (d) => d == 34,
    Thursday: (d) => d === 0,
    Friday: (d) => d % 2 === 0,
    Saturday: (d) => d == 56,
  };
  return preds[day](num);
};
