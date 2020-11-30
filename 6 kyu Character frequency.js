// https://www.codewars.com/kata/53e895e28f9e66a56900011a

const letterFrequency = (str) => {
  str = str.toLowerCase().replace(/[^a-zA-Z]+/g, '');
 
  let map = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  let res = Object.entries(map);
  res.sort((a, b) =>
    b[1] !== a[1] ? b[1] - a[1] : a[0].charCodeAt(0) - b[0].charCodeAt(0)
  );
  return res;
};

