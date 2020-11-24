// https://www.codewars.com/kata/5b6db1acb118141f6b000060

const recycle = (input) => {
  const recycling = (material) =>
    input
      .filter((a) => a.material === material || a.secondMaterial === material)
      .map((obj) => obj.type);

  let recycled = [
    recycling("paper"),
    recycling("glass"),
    recycling("organic"),
    recycling("plastic"),
  ];

  return recycled;
};
