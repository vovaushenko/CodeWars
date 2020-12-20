// https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e

const encode = (text) =>
  [...text].map((char) => tripleBits(to8bitBinary(char.charCodeAt(0)))).join('');

const decode = (bits) => {
  const splitByThreee = splitByThreeAndCheckError(bits);
  const toDecimal = groupOfEigthToDecimal(splitByThreee);
  const toString = toDecimal.map((digit) => String.fromCharCode(digit)).join('');
  return toString;
};

function to8bitBinary(n) {
  return ('000000000' + n.toString(2)).substr(-8);
}

function tripleBits(binary) {
  return [...binary].map((bit) => bit.repeat(3)).join('');
}

function splitByThreeAndCheckError(bits) {
  let i = 0,
    j = 1,
    k = 2;
  let res = [];
  while (k < bits.length) {
    Number(bits[i]) + Number(bits[j]) + Number(bits[k]) > 1 ? res.push(1) : res.push(0);
    i = i + 3;
    j = j + 3;
    k = k + 3;
  }
  return res;
}

function groupOfEigthToDecimal(bits) {
  let result = [];
  for (let i = 0; i < bits.length; i += 8) {
    let temp = '';
    for (let j = i; j < i + 8; j++) {
      temp += bits[j];
    }

    result.push(parseInt(temp, 2));
  }
  return result;
}
