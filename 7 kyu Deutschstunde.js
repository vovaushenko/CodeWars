// https://www.codewars.com/kata/552cd8624a414ec2b2000086

const derDieDas = (wort) => {
  const vowels = 'aeiouäöüAEIOUÄÖÜ';
  let vowelCount = [...wort].filter((char) => vowels.includes(char)).length;

  if (vowelCount < 2) return `das ${wort}`;
  if (vowelCount >= 2 && vowelCount < 4) return `die ${wort}`;

  return `der ${wort}`;
};
