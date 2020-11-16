// https://www.codewars.com/kata/5878520d52628a092f0002d0

// firstly split phrase into words, then words into letters, then upperCase to lowerCase and vice versa
//finally reverse process -> letters into words -> words into string
const stringTransformer = (str) => {
  return words = str
    .split(' ')
    .reverse()
    .map((word) => [...word]
    .map((char) =>
        char.toUpperCase() === char 
        ? char = char.toLowerCase() 
        : char = char.toUpperCase()
      )
    ).map(el => el.join(''))
    .join(' ')
    
};