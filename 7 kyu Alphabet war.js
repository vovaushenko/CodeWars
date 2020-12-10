// https://www.codewars.com/kata/59377c53e66267c8f6000027

const alphabetWar = (str) => {
  const leftSide = ' sbpw';
  const rightSide = ' zdqm';
  const leftSidePower = [...str]
    .filter((a) => leftSide.includes(a))
    .reduce((power, char) => power + leftSide.indexOf(char), 0);
  const rightSidePower = [...str]
    .filter((a) => rightSide.includes(a))
    .reduce((power, char) => power + rightSide.indexOf(char), 0);
  if (rightSidePower > leftSidePower) return 'Right side wins!';
  if (rightSidePower < leftSidePower) return 'Left side wins!';
  return "Let's fight again!";
};