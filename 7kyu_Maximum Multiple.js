// maxMultiple (37,200) ==> return (185)

// https://www.codewars.com/kata/5aba780a6a176b029800041c

const maxMultiple = (n1, n2) => {
  while (n2 > n1) {
    if (n2 % n1 === 0) {
      return n2;
    }

    n2--;
  }
};
