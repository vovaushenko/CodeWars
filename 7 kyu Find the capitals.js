// https://www.codewars.com/kata/539ee3b6757843632d00026b

const capitals = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      result.push(i);
    }
  }
  return result;
};
