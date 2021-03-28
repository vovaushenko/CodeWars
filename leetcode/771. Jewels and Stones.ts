// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

const numJewelsInStones = (jewels: string, stones: string): number => {
  let jewelsMap: { [key: string]: number } = [...jewels].reduce(
    (map: { [key: string]: number }, char) => ((map[char] = map[char] + 1 || 1), map),
    {}
  );
  let jewelsCount = 0;
  for (let possibleJewel of stones) {
    if (possibleJewel in jewelsMap) jewelsCount++;
  }

  return jewelsCount;
};
