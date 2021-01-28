// https://www.codewars.com/kata/52190daefe9c702a460003dd

function searchSubstr(fullText, searchText, allowOverlap) {
  if (!searchText) return 0;
  let patternLength = searchText.length;
  let count = 0;
  const helper = (text) => {
    if (text.length < searchText.length) return;
    if (text.slice(0, patternLength) === searchText) count++;

    if (allowOverlap === false) {
      helper(text.substring(patternLength));
    } else {
      helper(text.substring(1));
    }
  };

  helper(fullText);
  return count;
}
