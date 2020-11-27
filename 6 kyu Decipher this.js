// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

const swap = (a, id1, id2) => {
  [a[id1], a[id2]] = [a[id2], a[id1]];
};

const decipherThis = (str) => {
  let deciphered = str.split(' ').map((a) => {
    let nums = a.replace(/\D+/g, '');
    let chars = [...a.replace(/[0-9]/g, '')];
    swap(chars, 0, chars.length - 1);
    return String.fromCharCode(Number(nums)) + chars.join('');
  });

  return deciphered.join(' ')
};