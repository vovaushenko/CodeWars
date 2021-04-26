// https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5

const calculateBits = (n) => [...n.toString(2)].filter((bit) => bit === '1').length;

const nextHigher = (n) => {
  const initialBits = calculateBits(n);

  while (true) {
    n++;
    if (calculateBits(n) === initialBits) return n;
  }
};
