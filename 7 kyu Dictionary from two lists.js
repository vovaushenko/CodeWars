// https://www.codewars.com/kata/5533c2a50c4fea6832000101

const createDict = (keys, values) => {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = values[i];
    if (val === undefined) val = null;
    result[key] = val;
  }
  return result;
};