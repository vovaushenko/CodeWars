// https://www.codewars.com/kata/57cc981a58da9e302a000214

const smallEnough = (a, limit) => {
  const filtered = a.filter((num) => num <= limit);

  return filtered.length === a.length ? true : false;
};