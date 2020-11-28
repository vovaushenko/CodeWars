// https://www.codewars.com/kata/5202ef17a402dd033c000009

const titleCase = (str1, str2) => {
  if (!str2)
    return str1
      .toLowerCase()
      .split(' ')
      .map((a) => (a = a.charAt(0).toUpperCase() + a.slice(1)))
      .join(' ');

  let arr1 = str1.toLowerCase().split(' ');
  let arr2 = str2.toLowerCase().split(' ');

  let titleCased = arr1.map((a, id) => {
    if (id === 0) a = a.charAt(0).toUpperCase() + a.slice(1);
    if (id !== 0 && !arr2.includes(a)) a = a.charAt(0).toUpperCase() + a.slice(1);
    return a;
  });
  return titleCased.join(' ');
};