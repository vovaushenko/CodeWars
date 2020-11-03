// https://www.codewars.com/kata/59cfc000aeb2844d16000075

const capitalize = (s) => {
  let cap1 = "";
  let cap2 = "";
  console.log(s);

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      cap1 += s[i].toUpperCase();
      cap2 += s[i];
    } else {
      cap2 += s[i].toUpperCase();
      cap1 += s[i];
    }
  }

  return [cap1, cap2];
};
