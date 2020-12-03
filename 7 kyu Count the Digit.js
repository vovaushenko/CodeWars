// https://www.codewars.com/kata/566fc12495810954b1000030

const nbDig = (n, d) => {
  return Array.from({ length: n + 1 }, (_, id) => (_ = id))
    .map((a) => String(a ** 2))
    .filter((a) => a.includes(String(d)))
    .map((a) => [...a].filter((a) => a === String(d)).join(""))
    .join("").length;
};
