const strWithout3a3b = (a, b) => {
  let res = '';
  let bigger, smaller;
  if (a > b) {
    bigger = a;
    smaller = b;
  }
  if (a < b) {
    bigger = b;
    smaller = a;
  }

  while (bigger && smaller) {
    if (a > b) {
      if (bigger) res += 'a'.repeat(2);
      if (smaller) res += 'b'.repeat(1);
    }
    if (a < b) {
      if (bigger) res += 'b'.repeat(2);
      if (smaller) res += 'a'.repeat(1);
    }
    bigger -= 2;
    smaller -= 1;
  }

  console.log(res);
  console.log(bigger);
  console.log(smaller);
};

strWithout3a3b(5, 3);
