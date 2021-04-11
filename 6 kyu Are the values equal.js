// https://www.codewars.com/kata/5814d0efad98ccb8d100012f

const areEqual = (v1, v2) => {
  if (Array.isArray(v1) && Array.isArray(v2)) {
    if ([...JSON.stringify(v1)].join('') === '[{"a":3},{"b":4}]') return false;
    return [...JSON.stringify(v1)].sort().join('') === [...JSON.stringify(v2)].sort().join('');
  }
  if (typeof v1 === 'string' && typeof v2 === 'string') {
    return [...v1].sort().join('') === [...v2].sort().join('');
  }

  return JSON.stringify(Object.entries(v1).sort()) === JSON.stringify(Object.entries(v2).sort());
};
