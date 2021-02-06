// https://www.codewars.com/kata/543e308b23ccbda148001526

const typing = (val) => {
  if (val === undefined) return 'undefined';
  if (typeof val === 'object' || 'string') {
    value = JSON.stringify(val);
  }
  if (typeof val === 'function') value = '' + val;

  return `${typeof val}=${value}`;
};
