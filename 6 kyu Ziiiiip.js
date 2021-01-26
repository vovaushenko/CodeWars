// https://www.codewars.com/kata/5298ad7cd0f550269500051b

const zipObject = (keys, values) => {
  if (!keys && !values) return {};
  if (values === undefined && Array.isArray(keys[0])) {
    let res = {};
    for (let pair of keys) {
      res[pair[0]] = pair[1];
    }

    return res;
  }

  let res = {};

  for (let i = 0; i < keys.length; i++) {
    if (values) {
      values[i] ? (res[keys[i]] = values[i]) : undefined;
    } else {
      res[keys[i]] = undefined;
    }
  }
  return res;
};
