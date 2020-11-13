// https://www.codewars.com/kata/52dffa05467ee54b93000712

function sort(sentence) {
  noPunctuation = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  let arr = noPunctuation.split(" ");
  const arrOfCapital = [];
  const arrOfNonCapital = [];
  for (let word of arr) {
    word[0].toUpperCase() === word[0]
      ? arrOfCapital.push(word)
      : arrOfNonCapital.push(word);
  }

  arrOfCapital.sort().reverse();
  arrOfNonCapital.sort();
  console.log(arrOfCapital);

  let solution = arrOfNonCapital.concat(arrOfCapital);
  return solution.join(" ");
}
