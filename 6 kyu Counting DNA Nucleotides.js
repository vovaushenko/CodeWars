// https://www.codewars.com/kata/52e84c460d83dd96e50000dd

const getCountedNucleotides = (genCode) => {
  const map = {};
  for (let nucleotide of genCode.toUpperCase()) {
    map[nucleotide] ? map[nucleotide]++ : (map[nucleotide] = 1);
  }
  if (!('T' in map)) map['T'] = 0;
  if (!('A' in map)) map['A'] = 0;
  if (!('C' in map)) map['C'] = 0;
  if (!('G' in map)) map['G'] = 0;
  return map;
};
