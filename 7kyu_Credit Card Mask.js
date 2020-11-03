// https://www.codewars.com/kata/5412509bd436bd33920011bc

const maskify = (str) => {
  let masked = "";
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
      masked += "#";
    } else {
      masked += str[i];
    }
  }
  return masked;
};
