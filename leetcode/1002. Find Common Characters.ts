const commonChars = (A: string[]): string[] => {
  const res = [];
  for (let char of A[0]) {
    if (A.every((word) => word.includes(char))) {
      res.push(char);
      A = A.map((word) => word.replace(char, ''));
    }
  }

  return res;
};
