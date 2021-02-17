// 692. Top K Frequent Words
// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

const typeK = (words: string[], k: number): string[] => {
  const map: { [key: string]: number } = {};

  for (let word of words) {
    map[word] ? map[word]++ : (map[word] = 1);
  }

  return Object.entries(map)
    .sort((a: any, b: any) => (a[1] !== b[1] ? b[1] - a[1] : a[0].localeCompare(b[0])))
    .slice(0, k)
    .map((pair) => pair[0]);
};
