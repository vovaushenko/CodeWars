// https://www.codewars.com/kata/608673cf4b69590030fee8d6

const lyricsPrint = (lyric) =>
  lyric.reduce((result, row) => {
    for (let i = 0; i < row.length; i++) {
      const currentWord = row[i];
      let previousWords = row.filter((_, id) => id < i);
      let tempWord = '';

      for (let char of currentWord) {
        tempWord += char;
        result.push([...previousWords, tempWord + '_']);
      }
    }
    return result;
  }, []);
