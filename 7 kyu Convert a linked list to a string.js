// https://www.codewars.com/kata/582c297e56373f0426000098

function stringify(list) {
  if (!list) return 'null';
  let route = '';
  while (list) {
    list.next ? (route += `${list.data} -> `) : (route += list.data);
    list = list.next;
  }
  return route + ` -> null`;
}
