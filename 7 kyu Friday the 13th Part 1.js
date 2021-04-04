// https://www.codewars.com/kata/5925acf31a9825d616000e74

const killcount = (counselors, jason) =>
  counselors
    .filter(([_, intelligence]) => intelligence < jason)
    .reduce((res, [name, _]) => res.concat(name), []);
