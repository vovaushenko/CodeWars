// https://www.codewars.com/kata/52b5247074ea613a09000164

const cookingTime = (eggs) => {
  if (eggs == 0) return 0;
  let count = 0;
  const helper = (egg) => {
    if (egg <= 8) {
      count++;
      return;
    }
    count++;
    helper(egg - 8);
  };

  helper(eggs);
  return count * 5;
};
