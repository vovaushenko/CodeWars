// https://www.codewars.com/kata/520446778469526ec0000001
Array.prototype.sameStructureAs = function (other) {
  if (isArray(this) == true && isArray(other) == false) return false;

  const sameStr = (arr1, arr2) => {
    let checker = true;
    const helper = (a1, a2) => {
      // check if some of arrays is exhausted
      if (typeof a1[0] === undefined || typeof a2[0] === undefined) {
        checker = false;
        return;
      }

      //edge case of recursion
      if (a1.length === 0 || a2.length === 0) {
        if (a1.length || a2.length) {
          checker = false;
          return;
        }
        return;
      }

      // check if lengths is equal
      if (a1[0].length !== a2[0].length && isArray(a1[0]) && isArray(a2[0])) {
        checker = false;
        return;
      }
      // if some of parts is not array => false
      if (isArray(a1[0]) != isArray(a2[0])) {
        checker = false;
        return;
      }

      // if our elements are not arrays we slice them, otherwise we call recursion again
      if (!isArray(a1[0]) && !isArray(a2[0])) {
        helper(a1.slice(1), a2.slice(1));
      } else {
        helper(a1[0], a2[0]);
      }
    };
    helper(arr1, arr2);
    return checker;
  };

  return sameStr(this, other);
};
