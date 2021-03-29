// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

const bingo = (a) =>
  [...new Set(a.map((d) => String.fromCharCode(64 + d)).filter((c) => 'BINGO'.includes(c)))]
    .length === 5
    ? 'WIN'
    : 'LOSE';
