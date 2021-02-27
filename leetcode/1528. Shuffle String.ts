// 1528. Shuffle String
// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

function restoreString(s: string, indices: number[]): string {
  const result = Array.from({ length: s.length });
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join('');
}
