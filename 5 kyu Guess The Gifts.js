// https://www.codewars.com/kata/52ae6b6623b443d9090002c8

const guessGifts = (wishlist, presents) => {
  let possibleGifts = wishlist.map((a) => a.size + a.clatters + a.weight);
  let available = presents.map((a) => a.size + a.clatters + a.weight);

  let guesses = [];
  for (let prop of available) {
    for (let i = 0; i < possibleGifts.length; i++) {
      if (prop === possibleGifts[i]) {
        guesses.push(i);
      }
    }
  }
  let res = guesses.map((a) => wishlist[a].name);
  res = [...new Set(res)];
  return res;
};