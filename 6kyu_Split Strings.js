// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

const solution = (str) => {
  let arr = [];

  const helper = (s) => {
    if (s.length === 0) {
      return;
    }
    let temp = "";
    temp += s[0];
    s[1] ? (temp += s[1]) : (temp += "_");
    arr.push(temp);

    helper(s.substring(2));
  };

  helper(str);
  return arr;
};

solution("abc");
