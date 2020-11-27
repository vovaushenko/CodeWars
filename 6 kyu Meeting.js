// https://www.codewars.com/kata/59df2f8f08c6cec835000012

const meetings = (str) => {
  let res = str
    .split(";")
    .map((pair) => pair.split(":").reverse().join(", ").toUpperCase())
    .sort()
    .join(")(");
  return "(" + res + ")";
};
