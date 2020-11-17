// https://www.codewars.com/kata/5680781b6b7c2be860000036

const vowelIndices = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let strArr = str.split('');
  let solution = [];
  let vowelIds = strArr.filter((a, id) => {
    if (vowels.includes(a.toLowerCase())) {
      solution.push(id + 1);
    }
  });
  return solution;
};