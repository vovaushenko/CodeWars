// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d

const isFlush = (cards) =>
  [...new Set(cards.map((card) => card.replace(/[0-9]/g, '')[1] || card.replace(/[0-9]/g, '')[0]))]
    .length === 1;
