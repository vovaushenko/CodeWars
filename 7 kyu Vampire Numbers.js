// https://www.codewars.com/kata/54d418bd099d650fa000032d

const vampire_test = (a, b) => {
  const nums = [...(String(a) + String(b))].sort();
  const product = [...String(a * b)].sort();
  if (nums.length !== product.length) return false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== product[i]) return false;
  }
  return true;
};