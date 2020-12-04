// https://www.codewars.com/kata/59727ff285281a44e3000011
const capitalize = (s) => s.slice(0, 1).toUpperCase() + s.slice(1);

const bandNameGenerator = (str) =>
  str[0] === str[str.length - 1]
    ? (res = capitalize(str) + str)
    : (res = 'The ' + capitalize(str));