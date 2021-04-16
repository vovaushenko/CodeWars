alpha = { ABCDE: 1, FGHIJ: 2, KLMNO: 3, PQRST: 4, UVWXY: 5 };

const nameScore = (name) =>
  [...name].reduce(
    (res, char) => {
      const charScore = Object.entries(alpha).find(([chars, _]) =>
        chars.includes(char.toUpperCase())
      );

      if (charScore) res[name] += charScore[1];
      return res;
    },
    { [name]: 0 }
  );
