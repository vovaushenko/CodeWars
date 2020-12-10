// https://www.codewars.com/kata/5650ab06d11d675371000003

// lets practice recursion

const splitInParts = (s, partLength) => {
  let result = '';

  const splitter = (str) => {
    if (str.length === 0) return;
    result += str.slice(0, partLength) + ' ';
    splitter(str.substring(partLength));
  };

  splitter(s);
  return result.trim();
};

splitInParts('HelloKata', 2);
