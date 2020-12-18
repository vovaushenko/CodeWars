// https://www.codewars.com/kata/552e45cc30b0dbd01100001a

const zipvalidate = (code) => {
  if (code.length !== 6) return false;

  let invalidStart = "05789";
  if (invalidStart.includes(code[0])) return false;
  for (let digit of code) {
    if (!Number(digit) && digit !== "0") return false;
  }
  return true;
};