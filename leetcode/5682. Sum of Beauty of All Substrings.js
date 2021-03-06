// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.

//🤪 Brute Force Javascript solution 🤪
const beautySum = (s) => {
  let totalBeauty = 0;

  for (let i = 0; i < s.length; i++) {
    //for substrings we will be saving frequencies in a hash map
    const map = {};

    for (let j = i; j < s.length; j++) {
      //saving frequencies of letters
      map[s[j]] ? map[s[j]]++ : (map[s[j]] = 1);
      //initialize max and min frequency
      let max = -Infinity;
      let min = Infinity;
      //iterate over hash map of a substring and find max and min frequency
      for (let key in map) {
        max = Math.max(max, map[key]);
        min = Math.min(min, map[key]);
      }
      //if max - min frequency is positive -> then we add this to our totalBeauty
      if (max - min > 0) totalBeauty += max - min;
    }
  }
  //that's it 💥
  return totalBeauty;
};
