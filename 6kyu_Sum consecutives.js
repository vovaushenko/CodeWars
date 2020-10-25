// https://www.codewars.com/kata/55eeddff3f64c954c2000059

function sumConsecutives(s) {
  let solution = [];
  let counter = 0;
  let counterPlus = 1;
  let consecutiveCounter = 1;

  //the idea to count the exact number of repeats
  while (counterPlus <= s.length) {
    if (s[counter] === s[counterPlus]) {
      consecutiveCounter += 1;
    }
    //when strike of repeat ends, we multiply repeated number on the numbre of repeats
    if (s[counter] !== s[counterPlus]) {
      solution.push(consecutiveCounter * s[counter]);
      consecutiveCounter = 1;
    }
    console.log(consecutiveCounter);
    counter++;
    counterPlus++;
  }

  return solution;
}
