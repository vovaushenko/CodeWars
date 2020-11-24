// https://www.codewars.com/kata/5b6db1acb118141f6b000060

const recycle = (input) => {
  let paper = input
    .filter((a) => a.material === "paper" || a.secondMaterial === "paper")
    .map((obj) => obj.type);

  let glass = input
    .filter((a) => a.material === "glass" || a.secondMaterial === "glass")
    .map((obj) => obj.type);

  let organic = input
    .filter((a) => a.material === "organic" || a.secondMaterial === "organic")
    .map((obj) => obj.type);

  let plastic = input
    .filter((a) => a.material === "plastic" || a.secondMaterial === "plastic")
    .map((obj) => obj.type);

  let recycled = [paper, glass, organic, plastic];

  return recycled;
};
