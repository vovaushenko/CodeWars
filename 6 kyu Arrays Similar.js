// https://www.codewars.com/kata/51e704f2d8dbace389000279

const arraysSimilar = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  a1 = a1.sort((a, b) => a - b);
  a2 = a2.sort((a, b) => a - b);
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};