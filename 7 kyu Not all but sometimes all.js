// https://www.codewars.com/kata/564ab935de55a747d7000040

const remove = (str, what) =>
  [...str].reduce(
    (res, char) => (char in what && what[char] ? what[char]-- : (res += char), res),
    ''
  );
