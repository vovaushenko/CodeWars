// https://www.codewars.com/kata/5898b4b71d298e51b600014b

// const sortTheInnerContent = (str) => {
//   let words = str.split(' ');
//   console.log(words);
//   let solution = [];
//   for (let word of words) {
//     console.log(word);
//     let sort = [...word].sort((a,b)=>b-a)
//   }
// };

// sortTheInnerContent('sort the inner content in descending order');

const word = 'sort';

let sort = [...word].sort((a, b) => a - b);
console.log(sort);
