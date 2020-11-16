// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2

const solution = (hash) => {
  let result = [];

  for (let key in hash) {
    result.push(`${key} = ${hash[key]}`);
  }
  return result.join(',')
};
