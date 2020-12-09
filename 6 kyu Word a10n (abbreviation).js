// https://www.codewars.com/kata/5375f921003bf62192000746

const abbreviate = (str) => {
  return str
    .split(/([_\W])/)
    .map((a) => (a.length > 3 ? `${a[0]}${a.length - 2}${a[a.length - 1]}` : a))
    .join('');
};
