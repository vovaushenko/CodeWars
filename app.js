// https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

const autocomplete = (input, dictionary) => {
  let gerRidOfUnnecessary = input.replace(/[^a-zA-Z0-9 !?]+/g, '');
  let solution = [];
  for (let word of dictionary) {
    if (gerRidOfUnnecessary === word.slice(0, gerRidOfUnnecessary.length)) {
      solution.push(word);
    }
  }
  return solution;
};

// let a1 = "ai";
// let a2 = "azrplane";

// let length = a1.length;

// console.log(a2.slice(0, length));

console.log(autocomplete("b^1", ["airplane", "airport", "apple", "ball"]));
