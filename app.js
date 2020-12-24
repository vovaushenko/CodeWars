// https://www.codewars.com/kata/525c65e51bf619685c000059

const cakes = (recipe, availableIngredients) => {
  let numberOfCakes = [];

  for (let ingredient in recipe) {
    if (!(ingredient in availableIngredients)) return 0;
    numberOfCakes.push(Math.floor(availableIngredients[ingredient] / recipe[ingredient]));
  }

  return Math.min(...numberOfCakes);
};
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
