// https://www.codewars.com/kata/52ab60b122e82a6375000bad

const sortReindeer = (reindeerNames) => {
  reindeerNames.sort((a, b) => {
    const [_, lastName1] = a.split(' ');
    const [__, lastName2] = b.split(' ');

    return lastName1.localeCompare(lastName2);
  });

  return reindeerNames;
};
