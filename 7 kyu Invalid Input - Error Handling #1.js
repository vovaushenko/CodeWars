// https://www.codewars.com/kata/55e6125ad777b540d9000042

const getCount = (words) =>
  typeof words === 'string'
    ? [...words.replace(/[^a-zA-Z]/g, '')]
        .filter((char) => char !== ' ')
        .reduce(
          (count, c) => (
            'aeiou'.includes(c.toLowerCase()) ? count.vowels++ : count.consonants++, count
          ),
          { vowels: 0, consonants: 0 }
        )
    : { vowels: 0, consonants: 0 };
