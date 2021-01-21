// 3. Longest Substring Without Repeating Characters

// Medium

const lengthOfLongestSubstring = (s) => {
  let longestUnique = 0;

  const helper = (str) => {
    if (!str.length) return;
    let tempLongestUnique = '';

    for (char of str) {
      if (tempLongestUnique.includes(char)) break;
      tempLongestUnique += char;
    }

    longestUnique = Math.max(longestUnique, tempLongestUnique.length);

    helper(str.substring(1));
  };

  helper(s);

  return longestUnique;
};
