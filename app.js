// https://www.codewars.com/kata/5b203de891c7469b520000b4

const playerManager = (players) => {
  if (!players) return [];
  const input = players.split(',');
  console.log(input);
  let [i, j] = [0, 1];
  const sortedPlayers = [];
  while (j < input.length) {
    sortedPlayers.push({ player: input[i].trim(), contact: +input[j] });
    i += 2;
    j += 2;
  }

  return sortedPlayers;
};

console.log(playerManager('John Doe, 8167238327, Jane Doe, 8163723827'));
