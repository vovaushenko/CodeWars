// https://www.codewars.com/kata/58941fec8afa3618c9000184

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let currentHeight = 0;
  let days = 0;

  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    days++;
    if (currentHeight >= desiredHeight) break;
    currentHeight -= downSpeed;
  }

  return days;
};
