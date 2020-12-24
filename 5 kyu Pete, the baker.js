// https://www.codewars.com/kata/525c65e51bf619685c000059

const cakes = (recipe, availableIngredients) => {
  let numberOfCakes = [];

  for (let ingredient in recipe) {
    if (!(ingredient in availableIngredients)) return 0;
    numberOfCakes.push(Math.floor(availableIngredients[ingredient] / recipe[ingredient]));
  }

  return Math.min(...numberOfCakes);
};