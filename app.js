// https://www.codewars.com/kata/5865dd726b56998ec4000185

const scoring = (arr) =>
  arr
    .map((player) => {
      let score =
        player.normKill * 100 +
        player.assist * 50 +
        player.damage / 2 +
        player.healing +
        2 ** player.streak +
        player.envKill * 500;

      return { name: player.name, score };
    })
    .sort((player1, player2) => player2.score - player1.score)
    .map(({ name }) => name);

scoring([
  {
    name: 'JuanPablo',
    normKill: 5,
    assist: 12,
    damage: 3200,
    healing: 0,
    streak: 4,
    envKill: 1,
  },
  {
    name: 'ProfX',
    normKill: 2,
    assist: 14,
    damage: 600,
    healing: 1500,
    streak: 0,
    envKill: 0,
  },
]);
