// https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6

const sumR = (arr) => {
  let sum = 0;

  const summarizer = (a) => {
    if (a.length === 0) return;
    sum += a[0];
    summarizer(a.slice(1));
  };

  summarizer(arr);
  return sum;
};
