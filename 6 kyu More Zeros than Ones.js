// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

const moreZeros = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    //firstly we'll convert chars ASCII in binary form
    let binary = str.charCodeAt(i).toString(2);
    // then look into map of frequencies of 0s and 1s
    let map = {};
    for (num of binary) {
      map[num] ? map[num]++ : (map[num] = 1);
    }
    if (map["0"] > map["1"] && !result.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result;
};
