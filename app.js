// https://www.codewars.com/kata/55c45be3b2079eccff00010f

const order = (words) => {
  const r = /\d+/;
  let sorted = words
    .split(" ")
    .sort((a, b) => a.match(r)[0] - b.match(r)[0])
    .join(" ");
  return sorted;
};

order("is2 Thi1s T4est 3a");

// var s = "is2 ";
// console.log (s.match(r)[0]);
