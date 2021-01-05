// https://www.codewars.com/kata/57f625992f4d53c24200070e

const checkForMiniWin = (arr) => {
    const [letters, luckyNumber] = arr;
    let match = [...letters].filter((letter) => letter.charCodeAt(0) === luckyNumber);

    return match.length ? 1 : 0;
};

const bingo = (ticket, win) => {
    const numberOfWins = ticket.reduce((total, pair) => total + checkForMiniWin(pair), 0);

    return numberOfWins >= win ? 'Winner!' : 'Loser!';
};