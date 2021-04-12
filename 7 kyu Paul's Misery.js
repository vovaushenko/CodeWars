// https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

const paul = (x) => {
  const lookup = { kata: 5, 'Petes kata': 10, life: 0, eating: 1 };
  const totalMisery = x.reduce((misery, activity) => misery + lookup[activity], 0);

  if (totalMisery < 40) return 'Super happy!';
  if (totalMisery < 70) return 'Happy!';
  if (totalMisery < 100) return 'Sad!';
  return 'Miserable';
};
