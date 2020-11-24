const isMatching = (str, str1, str2) => {
  // get rid of white spaces
  str = str.replace(/ /g, '');
  let combined = (str1 + str2).replace(/ /g, '');
  if (str.length !== combined.length) return false;

  // lowercase strings
  str = [...str]
    .map((char) => char.toLowerCase())
    .sort()
    .join('');
  combined = [...combined]
    .map((char) => char.toLowerCase())
    .sort()
    .join('');

  return str === combined ? true : false;
};