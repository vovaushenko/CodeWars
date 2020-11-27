// https://www.codewars.com/kata/5848565e273af816fb000449

const swap = (a, id1, id2) => {
  [a[id1], a[id2]] = [a[id2], a[id1]];
};

const encryptThis = (str) => {
  let encrypted = str.split(' ').map((a) => {
    let temp = [...a];
    temp[0] = a.charCodeAt(0);
    swap(temp, 1, temp.length - 1);
    return temp.join('');
  });

  return encrypted.join(' ');
};