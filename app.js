const arrange = (arr) => arr.sort((a, b) => weightToGrams(a) - weightToGrams(b));

const weightToGrams = (weight) => {
  if (weight.includes('KG')) return +weight.replace(/\D/g, '') * 1000;
  if (weight.includes('G')) return +weight.replace(/\D/g, '');
  if (weight.includes('T')) return +weight.replace(/\D/g, '') * 1000000;
};

console.log(arrange(['200G', '300G', '150G', '100KG', '1T']));
